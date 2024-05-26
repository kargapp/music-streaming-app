import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
import { ScrollArea, ScrollBar } from "../components/shadcn/scroll-area";

import { DashboardIcon, PlusIcon } from "@radix-ui/react-icons";

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
  const items = Array(25).fill(<SidebarPlaylist />);
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
            <ResizablePanel
              defaultSize={25}
              className="flex flex-col gap-2 p-3"
            >
              <header className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <DashboardIcon className="h-6 w-6" />
                  <p className="text-xl">My Library</p>
                </div>
                <Button variant={"ghost"}>
                  <PlusIcon className="h-5 w-5" />
                </Button>
              </header>
              <ScrollArea className="grow">
                <SignedOut>Please sign in.</SignedOut>
                <SignedIn>
                  {items.map((item) => {
                    return item;
                  })}
                </SignedIn>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75} className="space-y-3 p-3">
              <Header />
              <main>{children}</main>
            </ResizablePanel>
          </ResizablePanelGroup>
          {/* <div className="h-10 bg-destructive">{"TODO: <Player />"}</div> */}
        </body>
      </html>
    </ClerkProvider>
  );
}

const Header = () => {
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

// TODO: needs props, extract component into another file
const SidebarPlaylist = () => {
  return (
    <Link
      href={"/liked-tracks"}
      className="flex items-center gap-2 rounded p-2 hover:bg-card"
    >
      <Image
        src={"/liked-tracks-cover.png"}
        width={40}
        height={40}
        alt=""
        className="rounded"
      />
      <p className="text-lg">Liked Tracks</p>
    </Link>
  );
};
