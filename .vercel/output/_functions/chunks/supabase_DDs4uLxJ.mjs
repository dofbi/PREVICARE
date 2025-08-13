import { createServerClient } from '@supabase/ssr';

function createClient({
  request,
  cookies
}) {
  return createServerClient(
    undefined                            ,
    undefined                            ,
    {
      cookies: {
        getAll() {
          return request.headers.get("cookie")?.split(";").map((cookie) => {
            const [name, value] = cookie.trim().split("=");
            return { name, value };
          }) ?? [];
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value, options }) => cookies.set(name, value, options)
          );
        }
      }
    }
  );
}

export { createClient as c };
