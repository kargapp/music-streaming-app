import { SignedIn, SignedOut } from "@clerk/nextjs";
import { clerkClient, currentUser } from "@clerk/nextjs/server";

export default async function RootPage() {
  const user = await currentUser();
  if (!user) return;
  const token = await clerkClient.users.getUserOauthAccessToken(
    user.id,
    "oauth_spotify",
  );
  return (
    <main>
      <SignedIn>
        <pre className="text-green-600">
          {JSON.stringify(token.data, null, 2)}
        </pre>
      </SignedIn>
    </main>
  );
}
