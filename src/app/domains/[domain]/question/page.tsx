import { startOrResumeDomainQuiz } from "@/app/actions/questions";
import { DomainType } from "@prisma/client";
import QuestionsPage from "./question-client";
import { redirect } from "next/navigation";

export default async function QuestionsListing({
  params,
}: {
  params: { domain: string };
}) {
  const domainStuff = params.domain.toUpperCase();

  if (!domainStuff || !(domainStuff in DomainType)) {
    return <div>Invalid domain</div>;
  }

  const response = await startOrResumeDomainQuiz(domainStuff as DomainType);
  if (response.error) {
    console.error("Error fetching questions:", response.error);
    throw response.error;
  }

  if (response.data?.isCompleted) {
    redirect(`/domains/${params.domain}/completed`);
  }

  return (
    <QuestionsPage
      questions={response.data!.questions!}
      answers={response.data!.answers!}
      sessionId={response.data!.sessionId!}
    />
  );
}
