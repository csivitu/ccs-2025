import { getQuestionsByDomain } from "../actions/questions";
import QuestionsPage from "./question";
import { DomainType } from "@prisma/client";

export default async function QuestionsListing(domain:DomainType) { 
const response = await getQuestionsByDomain("MANAGEMENT");
    if (response.error) {
        console.error("Error fetching questions:", response.error);
        throw response.error;
    }
    console.log(response)
    const questions = response.data!;
    console.log(questions)
    return (
        
        <QuestionsPage questions={questions} />
    )
}