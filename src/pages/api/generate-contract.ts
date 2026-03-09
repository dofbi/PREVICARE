import type { APIRoute } from 'astro';
import { createClient } from '../../lib/supabase';

export const GET: APIRoute = async ({ request, cookies, url }) => {
  try {
    const supabase = createClient({ request, cookies });
    
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError || !authData.user) {
      return new Response('Non authentifié', { status: 401 });
    }

    const subscriptionId = url.searchParams.get('subscriptionId');
    
    if (!subscriptionId) {
      return new Response('ID d\'abonnement manquant', { status: 400 });
    }

    const { data: subscription, error: subError } = await supabase
      .from('subscriptions')
      .select(`
        *,
        plan:subscription_plans(*)
      `)
      .eq('id', subscriptionId)
      .eq('user_id', authData.user.id)
      .single();

    if (subError || !subscription) {
      return new Response('Abonnement non trouvé', { status: 404 });
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('first_name, last_name, email, phone, address')
      .eq('id', authData.user.id)
      .single();

    const contractDate = new Date(subscription.starts_at).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    const expiryDate = new Date(subscription.expires_at).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Contrat d'Assurance - ${subscription.contract_number}</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; line-height: 1.6; }
    .header { text-align: center; border-bottom: 3px solid #1e40af; padding-bottom: 20px; margin-bottom: 30px; }
    .logo { font-size: 28px; font-weight: bold; color: #1e40af; }
    .contract-number { font-size: 14px; color: #666; margin-top: 10px; }
    h1 { color: #1e40af; font-size: 24px; }
    h2 { color: #1e40af; font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
    .section { margin-bottom: 30px; }
    .info-grid { display: grid; grid-template-columns: 200px 1fr; gap: 10px; }
    .info-label { font-weight: bold; color: #333; }
    .info-value { color: #666; }
    .features { background: #f8fafc; padding: 20px; border-radius: 8px; }
    .features ul { margin: 0; padding-left: 20px; }
    .features li { margin-bottom: 8px; }
    .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #ddd; padding-top: 20px; }
    .signature-section { margin-top: 50px; display: flex; justify-content: space-between; }
    .signature-box { width: 45%; }
    .signature-line { border-top: 1px solid #333; margin-top: 60px; padding-top: 10px; text-align: center; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">PREVICARE EMPLOI</div>
    <p>Votre partenaire RH au Sénégal</p>
    <div class="contract-number">Contrat N° ${subscription.contract_number}</div>
  </div>

  <h1>CONTRAT D'ASSURANCE - SERVICES RH</h1>

  <div class="section">
    <h2>Informations du Souscripteur</h2>
    <div class="info-grid">
      <span class="info-label">Nom complet :</span>
      <span class="info-value">${profile?.first_name || ''} ${profile?.last_name || ''}</span>
      <span class="info-label">Email :</span>
      <span class="info-value">${profile?.email || authData.user.email}</span>
      <span class="info-label">Téléphone :</span>
      <span class="info-value">${profile?.phone || 'Non renseigné'}</span>
      <span class="info-label">Adresse :</span>
      <span class="info-value">${profile?.address || 'Non renseignée'}</span>
    </div>
  </div>

  <div class="section">
    <h2>Détails de l'Abonnement</h2>
    <div class="info-grid">
      <span class="info-label">Formule :</span>
      <span class="info-value">${subscription.plan?.display_name}</span>
      <span class="info-label">Montant mensuel :</span>
      <span class="info-value">${new Intl.NumberFormat('fr-SN').format(subscription.plan?.price)} FCFA</span>
      <span class="info-label">Date de début :</span>
      <span class="info-value">${contractDate}</span>
      <span class="info-label">Date d'expiration :</span>
      <span class="info-value">${expiryDate}</span>
      <span class="info-label">Mode de paiement :</span>
      <span class="info-value">${subscription.payment_method === 'om' ? 'Orange Money' : subscription.payment_method === 'wave' ? 'Wave' : subscription.payment_method}</span>
    </div>
  </div>

  <div class="section">
    <h2>Services Inclus</h2>
    <div class="features">
      <ul>
        ${subscription.plan?.features?.map((f: string) => `<li>${f}</li>`).join('') || ''}
      </ul>
    </div>
  </div>

  <div class="section">
    <h2>Conditions Générales</h2>
    <p>Le présent contrat est conclu pour une durée d'un mois, renouvelable par tacite reconduction. Le souscripteur peut résilier son abonnement à tout moment depuis son espace personnel, sans frais supplémentaires.</p>
    <p>PREVICARE EMPLOI s'engage à fournir les services décrits ci-dessus selon les modalités définies dans les conditions générales d'utilisation disponibles sur notre site.</p>
  </div>

  <div class="signature-section">
    <div class="signature-box">
      <p><strong>Le Souscripteur</strong></p>
      <div class="signature-line">
        ${profile?.first_name || ''} ${profile?.last_name || ''}
      </div>
    </div>
    <div class="signature-box">
      <p><strong>PREVICARE EMPLOI</strong></p>
      <div class="signature-line">
        Signature électronique
      </div>
    </div>
  </div>

  <div class="footer">
    <p>PREVICARE EMPLOI - Dakar, Sénégal</p>
    <p>Document généré électroniquement le ${new Date().toLocaleDateString('fr-FR')} - Ce document fait foi de contrat</p>
  </div>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': `inline; filename="contrat-${subscription.contract_number}.html"`,
      },
    });

  } catch (error) {
    console.error('Contract generation error:', error);
    return new Response('Erreur lors de la génération du contrat', { status: 500 });
  }
};
