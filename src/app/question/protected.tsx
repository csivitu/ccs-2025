import { redirect } from "next/navigation";
import { auth } from "../(auth)/auth";
import QuestionsPage from "./page";

export default async function ProtectedQuestionsPage() {
  const session = await auth();
  
  console.log(session);
  if (!session?.user) {
      redirect("/unprotected");
      
  }
// ADD a switch case to redirect diff page on protected ?
  return <QuestionsPage session={session} />;
}
