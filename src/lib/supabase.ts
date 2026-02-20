import { createServerClient } from "@supabase/ssr";
import type { AstroCookies } from "astro";

export const cookieOptions = {
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'lax' as const,
};

export function createClient({
	request,
	cookies,
}: {
	request: Request;
	cookies: AstroCookies;
}) {
	return createServerClient(
		import.meta.env.SUPABASE_URL!,
		import.meta.env.SUPABASE_KEY!,
		{
			cookies: {
				getAll() {
					return request.headers.get('cookie')?.split(';').map(cookie => {
						const [name, value] = cookie.trim().split('=');
						return { name, value };
					}) ?? [];
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value, options }) =>
						cookies.set(name, value, options)
					);
				},
			},
		}
	);
}