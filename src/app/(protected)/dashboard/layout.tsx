import { redirect } from "next/navigation";
import { auth } from "../../(auth)/auth";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>
      {children}
    </div>
  );
}