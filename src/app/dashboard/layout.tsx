import { redirect } from "next/navigation";
import { auth } from "../(auth)/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/footer";
import { IoIosWarning } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";

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
      <div className="w-full py-3 bg-orange-400/20 border-orange-900/70 border-b px-8 font-apro flex items-center gap-4">
      <RiErrorWarningLine className="w-12 h-12 text-orange-100" />
        <div className="">
        <h1 className="font-bold text-lg">Profile Completion Required</h1>
        <p>To enhance your experience and ensure seamless communication, please visit the <strong>Profile Page</strong> and complete your personal details.</p>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}
