import type { APIRoute } from 'astro';
import { createClient } from '../../lib/supabase';

export const GET: APIRoute = async ({ request, cookies, url }) => {
  try {
    const supabase = createClient({ request, cookies });
    
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError || !authData.user) {
      return new Response('Non authentifié', { status: 401 });
    }

    const paymentId = url.searchParams.get('paymentId');
    
    if (!paymentId) {
      return new Response('ID de paiement manquant', { status: 400 });
    }

    const { data: payment, error: paymentError } = await supabase
      .from('payments')
      .select(`
        *,
        subscription:subscriptions(
          *,
          plan:subscription_plans(*)
        )
      `)
      .eq('id', paymentId)
      .eq('user_id', authData.user.id)
      .single();

    if (paymentError || !payment) {
      return new Response('Paiement non trouvé', { status: 404 });
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('first_name, last_name, email, phone, address')
      .eq('id', authData.user.id)
      .single();

    const paymentDate = new Date(payment.created_at).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Facture - ${payment.invoice_number}</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; line-height: 1.6; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #1e40af; padding-bottom: 20px; margin-bottom: 30px; }
    .logo { font-size: 28px; font-weight: bold; color: #1e40af; }
    .invoice-info { text-align: right; }
    .invoice-number { font-size: 20px; font-weight: bold; color: #1e40af; }
    h2 { color: #1e40af; font-size: 16px; margin-bottom: 10px; }
    .section { margin-bottom: 30px; }
    .info-box { background: #f8fafc; padding: 15px; border-radius: 8px; }
    .info-grid { display: grid; grid-template-columns: 150px 1fr; gap: 8px; }
    .info-label { font-weight: bold; color: #333; }
    .info-value { color: #666; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background: #1e40af; color: white; }
    .total-row { font-weight: bold; font-size: 18px; }
    .total-row td { border-top: 2px solid #1e40af; }
    .status { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
    .status-completed { background: #dcfce7; color: #166534; }
    .status-pending { background: #fef3c7; color: #92400e; }
    .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #ddd; padding-top: 20px; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="logo">PREVICARE EMPLOI</div>
      <p style="margin: 5px 0; color: #666;">Votre partenaire RH au Sénégal</p>
      <p style="margin: 5px 0; font-size: 12px; color: #999;">Dakar, Sénégal</p>
    </div>
    <div class="invoice-info">
      <div class="invoice-number">${payment.invoice_number}</div>
      <p style="margin: 5px 0; color: #666;">Date : ${paymentDate}</p>
      <span class="status ${payment.status === 'completed' ? 'status-completed' : 'status-pending'}">
        ${payment.status === 'completed' ? 'PAYÉE' : 'EN ATTENTE'}
      </span>
    </div>
  </div>

  <div class="section">
    <h2>Facturé à</h2>
    <div class="info-box">
      <div class="info-grid">
        <span class="info-label">Nom :</span>
        <span class="info-value">${profile?.first_name || ''} ${profile?.last_name || ''}</span>
        <span class="info-label">Email :</span>
        <span class="info-value">${profile?.email || authData.user.email}</span>
        <span class="info-label">Téléphone :</span>
        <span class="info-value">${profile?.phone || '-'}</span>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>Détails de la Facture</h2>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Période</th>
          <th style="text-align: right;">Montant</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Abonnement ${payment.subscription?.plan?.display_name || 'PREVICARE'}</strong>
            <br><span style="font-size: 12px; color: #666;">Contrat: ${payment.subscription?.contract_number || '-'}</span>
          </td>
          <td>1 mois</td>
          <td style="text-align: right;">${new Intl.NumberFormat('fr-SN').format(payment.amount)} FCFA</td>
        </tr>
        <tr class="total-row">
          <td colspan="2">TOTAL</td>
          <td style="text-align: right;">${new Intl.NumberFormat('fr-SN').format(payment.amount)} FCFA</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <h2>Informations de Paiement</h2>
    <div class="info-box">
      <div class="info-grid">
        <span class="info-label">Mode de paiement :</span>
        <span class="info-value">${payment.payment_method === 'om' ? 'Orange Money' : payment.payment_method === 'wave' ? 'Wave' : payment.payment_method}</span>
        <span class="info-label">Référence :</span>
        <span class="info-value">${payment.payment_reference || '-'}</span>
        <span class="info-label">Statut :</span>
        <span class="info-value">${payment.status === 'completed' ? 'Paiement reçu' : 'En attente'}</span>
      </div>
    </div>
  </div>

  <div class="footer">
    <p>Merci pour votre confiance !</p>
    <p>PREVICARE EMPLOI - Dakar, Sénégal</p>
    <p>Document généré électroniquement le ${new Date().toLocaleDateString('fr-FR')}</p>
  </div>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': `inline; filename="facture-${payment.invoice_number}.html"`,
      },
    });

  } catch (error) {
    console.error('Invoice generation error:', error);
    return new Response('Erreur lors de la génération de la facture', { status: 500 });
  }
};
