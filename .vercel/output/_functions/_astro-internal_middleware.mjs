import { d as defineMiddleware, s as sequence } from './chunks/index_BCAuoY3S.mjs';
import { c as createClient } from './chunks/supabase_DDs4uLxJ.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_WS5n3Yq4.mjs';
import 'kleur/colors';
import './chunks/astro/server_PjVteVLJ.mjs';
import 'clsx';
import 'cookie';

const PROTECTED_PATHS = [
  "/espace-employes",
  "/espace-employeurs",
  "/espace-delegues"
];
const AUTH_PATHS = [
  "/connexion",
  "/inscription"
];
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const supabase = createClient({
    request: context.request,
    cookies: context.cookies
  });
  const { data: authData } = await supabase.auth.getUser();
  const user = authData.user;
  if (user) {
    context.locals.user = user;
  }
  if (user && AUTH_PATHS.includes(pathname)) {
    const userRole = user.user_metadata?.role;
    let redirectUrl = "/";
    if (userRole === "employee") {
      redirectUrl = "/espace-employes";
    } else if (userRole === "employer") {
      redirectUrl = "/espace-employeurs";
    } else if (userRole === "delegate") {
      redirectUrl = "/espace-delegues";
    }
    return context.redirect(redirectUrl);
  }
  if (!user && PROTECTED_PATHS.includes(pathname)) {
    return context.redirect("/connexion");
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
