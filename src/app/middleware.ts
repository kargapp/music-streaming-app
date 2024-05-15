import { type NextRequest } from "next/server";
import { updateSession } from "@/app/utilities/supabase/middleware";

export async function middleware(request: NextRequest) {
	return await updateSession(request);
}

export const config = {
	matcher: [
		/**
		 * Matches all request paths except for the ones starting with:
		 * - _next/static
		 * - _next/image
		 * - favicon.ico
		 * - (add more as needed)
		 */
		"/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
	],
};
