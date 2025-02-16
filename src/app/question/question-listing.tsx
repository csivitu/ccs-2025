import { getQuestionsByDomain } from "../actions/questions";
import QuestionsPage from "./page";
import { DomainType } from "@prisma/client";

export default async function QuestionsListing(domain:DomainType) { 
    const response = await getQuestionsByDomain(domain);
    const questions = response.data!;
    console.log(questions)
    return (
        
        <QuestionsPage questions={questions} />
    )
}