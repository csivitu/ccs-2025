import { redirect } from "next/navigation";
import { auth } from "../(auth)/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/footer";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar username={session?.user.name} image={session.user.image || "" }/>
      {children}
      <Footer />
    </div>
  );
}
