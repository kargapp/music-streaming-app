import { columns } from "@/app/components/data-table/columns";
import { DataTable } from "@/app/components/data-table/data-table";
import { ScrollArea, ScrollBar } from "@/app/components/shadcn/scroll-area";
import { tracks } from "@/app/library/data";
import Image from "next/image";

export default async function LikedTracksPage() {
  return (
    <main className="space-y-3">
      <Header />
      <ScrollArea className="">
        {/* <DataTable columns={columns} data={tracks} /> */}
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </main>
  );
}

const Header = () => {
  return (
    <header className="flex items-end space-x-3">
      <Image
        src={"/liked-tracks-cover.png"}
        width={150}
        height={150}
        alt=""
        className="rounded"
      />
      <p className="text-3xl">Liked Tracks</p>
    </header>
  );
};
