import { redirect } from "next/navigation";

export default async function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  redirect("/dashboard");

  return <>{children}</>;
}
