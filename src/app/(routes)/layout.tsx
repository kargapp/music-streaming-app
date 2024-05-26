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

import { Button } from "@/app/components/shadcn/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/shadcn/resizable";

import Sidebar from "../components/layout/sidebar";

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
            "flex h-screen flex-col bg-background font-sans antialiased",
            font_sans.variable,
          )}
        >
          <ResizablePanelGroup direction="horizontal" className="grow">
            <Sidebar />
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={75}
              className="flex flex-col space-y-3 p-3"
            >
              <SpotiByeHeader />{" "}
              {/* WHY: min-h-0 is required to make child ScrollArea scrollable */}
              <main className="flex min-h-0 grow">{children}</main>
            </ResizablePanel>
          </ResizablePanelGroup>
          <div className="h-10 bg-destructive">{"TODO: <Player />"}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}

const SpotiByeHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Image src={"logo.svg"} width={30} height={30} alt="" />
        <p className="text-2xl">SpotiBye</p>
      </div>
      <div>
        <SignedOut>
          <SignInButton>
            <Button variant={"ghost"}>Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
