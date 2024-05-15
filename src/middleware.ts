import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	return await NextResponse.next();
}

export const config = {
	matcher: [],
};
