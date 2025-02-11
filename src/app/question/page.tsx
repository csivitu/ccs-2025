import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuestionPanel from "@/components/questions-page/question-panel";
import AnswerPanel from "@/components/questions-page/answer-panel";
import { Button } from "@/components/ui/button";

export default function QuestionsPage() {
  return (
    <div className="bg-[#303132] ">
      <Navbar />
      <main className=" md:mx-12 mx-6">
        <section className="flex md:flex-row h-[75vh] flex-col">
          <QuestionPanel question="Develop an object-oriented design for a board game like Chess or Monopoly. How would you use classes to represent the board, pieces, and players? How could inheritance handle different types of pieces?" />
          <AnswerPanel />
        </section>

        <div className="flex flex-row justify-between my-8 ">
          <Button className="bg-[#9386E4]  hover:bg-purple-800 hover:text-gray-800 px-6 py-3 sm:text-xl sm:px-12 sm:py-5 rounded-full text-gray-950 font-bold">
            Previous
          </Button>
          <Button className="bg-[#9386E4]  hover:bg-purple-800 hover:text-gray-800  px-6 py-3 sm:text-xl sm:px-12 sm:py-5 rounded-full text-gray-950 font-bold">
            Next
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
