import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuestionPanel from "@/components/questions-page/question-panel";
import AnswerPanel from "@/components/questions-page/answer-panel";
import { Button } from "@/components/ui/button";

export default function QuestionsPage() {
  return (
    <div className="bg-[#303132] ">
      <Navbar />
      <main className=" mx-12">
        <section className="flex flex-row h-[75vh]">
          <QuestionPanel question="Develop an object-oriented design for a board game like Chess or Monopoly. How would you use classes to represent the board, pieces, and players? How could inheritance handle different types of pieces?" />
          <AnswerPanel />
        </section>

        <div className="flex flex-row justify-between my-8 ">
          <Button className="bg-[#9386E4]  hover:bg-purple-800 hover:text-gray-800 text-xl px-12 py-5 rounded-full text-gray-950 font-semibold">
            Previous
          </Button>
          <Button className="bg-[#9386E4]  hover:bg-purple-800 hover:text-gray-800  text-xl px-12 py-5 rounded-full text-gray-950 font-semibold">
            Next
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
