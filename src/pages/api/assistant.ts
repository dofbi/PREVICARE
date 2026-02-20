import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  const { user } = locals;

  if (!user) {
    return new Response(JSON.stringify({ error: 'Non autorisé' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Messages invalides' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const agentEndpoint = import.meta.env.AGENT_ENDPOINT;
    const agentKey = import.meta.env.AGENT_KEY;

    if (!agentEndpoint || !agentKey) {
      console.error('AGENT_ENDPOINT ou AGENT_KEY manquant dans les variables d\'environnement');
      return new Response(JSON.stringify({ error: 'Configuration de l\'assistant manquante' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch(`${agentEndpoint}chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${agentKey}`
      },
      body: JSON.stringify({
        messages,
        stream: false,
        include_functions_info: false,
        include_retrieval_info: true,
        include_guardrails_info: false
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erreur API DigitalOcean:', errorText);
      return new Response(JSON.stringify({ error: 'Erreur lors de la communication avec l\'assistant' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erreur dans l\'API assistant:', error);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
