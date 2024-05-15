import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

import "@/app/styles/globals.css";
import { cn } from "../library/tailwind";

const font_sans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "SpotiBye",
	description: "Another music streaming app!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={cn(
						"font-sans antialiased bg-background",
						font_sans.variable
					)}
				>
					<header>
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</header>
					<main>{children}</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
