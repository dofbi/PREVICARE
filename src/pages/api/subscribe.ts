import type { APIRoute } from 'astro';
import { createClient } from '../../lib/supabase';
import { processPayment } from '../../lib/paymentService';
import type { PaymentMethodType } from '../../types/payments';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const supabase = createClient({ request, cookies });
    
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError || !authData.user) {
      return new Response(
        JSON.stringify({ success: false, message: 'Non authentifié' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const formData = await request.formData();
    const planId = formData.get('planId') as string;
    const paymentMethod = formData.get('paymentMethod') as PaymentMethodType;
    const phoneNumber = formData.get('phoneNumber') as string;
    const amount = parseInt(formData.get('amount') as string, 10);

    if (!planId || !paymentMethod) {
      return new Response(
        JSON.stringify({ success: false, message: 'Données manquantes' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data: plan, error: planError } = await supabase
      .from('subscription_plans')
      .select('*')
      .eq('id', planId)
      .single();

    if (planError || !plan) {
      return new Response(
        JSON.stringify({ success: false, message: 'Plan non trouvé' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const paymentResult = await processPayment({
      amount: plan.price,
      method: paymentMethod,
      phoneNumber,
      description: `Abonnement ${plan.display_name}`,
    });

    if (!paymentResult.success) {
      return new Response(
        JSON.stringify({ success: false, message: paymentResult.message }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error: cancelError } = await supabase
      .from('subscriptions')
      .update({ status: 'cancelled', updated_at: new Date().toISOString() })
      .eq('user_id', authData.user.id)
      .in('status', ['active', 'pending']);

    const startsAt = new Date();
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 1);

    const { data: subscription, error: subError } = await supabase
      .from('subscriptions')
      .insert({
        user_id: authData.user.id,
        plan_id: planId,
        status: 'active',
        payment_method: paymentMethod,
        payment_reference: paymentResult.reference,
        starts_at: startsAt.toISOString(),
        expires_at: expiresAt.toISOString(),
      })
      .select()
      .single();

    if (subError) {
      console.error('Error creating subscription:', subError);
      return new Response(
        JSON.stringify({ success: false, message: 'Erreur lors de la création de l\'abonnement' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error: paymentError } = await supabase
      .from('payments')
      .insert({
        user_id: authData.user.id,
        subscription_id: subscription.id,
        amount: plan.price,
        payment_method: paymentMethod,
        payment_reference: paymentResult.reference,
        status: 'completed',
      });

    if (paymentError) {
      console.error('Error recording payment:', paymentError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Abonnement activé avec succès !',
        subscription: {
          id: subscription.id,
          contract_number: subscription.contract_number,
          plan: plan.display_name,
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Subscribe error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Une erreur est survenue' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
