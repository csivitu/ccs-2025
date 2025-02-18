import { startOrResumeDomainQuiz } from "@/app/actions/questions";
import { DomainType } from "@prisma/client";
import QuestionsPage from "./question-client";
import { redirect } from "next/navigation";

export default async function QuestionsListing({
  params,
}: {
  params: { domain: string };
}) {
  const { domain } = await params;
  const capitalizedDomain = domain.toUpperCase();

  if (!capitalizedDomain || !(capitalizedDomain in DomainType)) {
    return <div>Invalid domain</div>;
  }

  const response = await startOrResumeDomainQuiz(
    capitalizedDomain as DomainType
  );
  if (response.error) {
    console.error("Error fetching questions:", response.error);
    throw response.error;
  }

  if (response.data?.isCompleted) {
    redirect(`/domains?completed=true`);
  }

  return (
    <QuestionsPage
      questions={response.data!.questions!}
      answers={response.data!.answers!}
      sessionId={response.data!.sessionId!}
    />
  );
}
