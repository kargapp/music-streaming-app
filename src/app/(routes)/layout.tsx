import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Image from "next/image";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import "@/app/styles/globals.css";
import { cn } from "../library/tailwind";

import { Button } from "../components/shadcn/button";

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
            "bg-background font-sans antialiased",
            font_sans.variable,
          )}
        >
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Image src={"logo.svg"} width={30} height={30} alt="Spotify Logo" />
        <p className="text-2xl">SpotiBye</p>
      </div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
};
