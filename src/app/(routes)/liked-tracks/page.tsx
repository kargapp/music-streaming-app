import Image from "next/image";

export default async function LikedTracksPage() {
  return (
    <main className="flex h-full flex-col space-y-3">
      <Header />
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
