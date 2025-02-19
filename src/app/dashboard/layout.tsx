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
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
