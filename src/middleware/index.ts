
import { defineMiddleware } from "astro:middleware";
import { createClient } from "../lib/supabase";

const PROTECTED_PATHS = [
  '/espace-employes',
  '/espace-employeurs', 
  '/espace-delegues'
];

const AUTH_PATHS = [
  '/connexion',
  '/inscription'
];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  const supabase = createClient({
    request: context.request,
    cookies: context.cookies,
  });

  const { data: authData } = await supabase.auth.getUser();
  const user = authData.user;

  // Si l'utilisateur est connecté, le stocker dans locals
  if (user) {
    context.locals.user = user;
  }

  // Rediriger les utilisateurs connectés depuis les pages d'auth
  if (user && AUTH_PATHS.includes(pathname)) {
    const userRole = user.user_metadata?.role;
    
    let redirectUrl = '/';
    
    if (userRole === 'employee') {
      redirectUrl = '/espace-employes';
    } else if (userRole === 'employer') {
      redirectUrl = '/espace-employeurs';
    } else if (userRole === 'delegate') {
      redirectUrl = '/espace-delegues';
    }
    
    return context.redirect(redirectUrl);
  }

  // Protéger les pages privées
  if (!user && PROTECTED_PATHS.includes(pathname)) {
    return context.redirect('/connexion');
  }

  return next();
});
