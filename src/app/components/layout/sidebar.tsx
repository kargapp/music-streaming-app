import { FC } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { ResizablePanel } from "../shadcn/resizable";
import { ScrollArea, ScrollBar } from "../shadcn/scroll-area";
import { DashboardIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../shadcn/button";
import Link from "next/link";
import Image from "next/image";

type SidebarProps = {};

const Sidebar: FC<SidebarProps> = () => {
  const items = Array(25).fill(<SidebarPlaylist />);
  return (
    <ResizablePanel defaultSize={25} className="flex flex-col gap-2 p-3">
      <SidebarHeader />
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
  );
};

export default Sidebar;

const SidebarHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <DashboardIcon className="h-6 w-6" />
        <p className="text-xl">My Library</p>
      </div>
      <Button variant={"ghost"}>
        <PlusIcon className="h-5 w-5" />
      </Button>
    </header>
  );
};

export const SidebarPlaylist = () => {
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
