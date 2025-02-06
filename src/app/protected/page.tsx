import { redirect } from "next/navigation";
import { auth } from "../(auth)/auth";
export default async function ProtectedPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/unprotected");
  }
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome {session.user.name}</p>
    </div>
  );
}