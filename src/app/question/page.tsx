import { useState } from "react";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuestionPanel from "@/components/questions-page/question-panel";
import AnswerPanel from "@/components/questions-page/answer-panel";
import { Button } from "@/components/ui/button";

const questions = [
  "Develop an object-oriented design for a board game like Chess or Monopoly. How would you use classes to represent the board, pieces, and players? How could inheritance handle different types of pieces?",
  "Explain the concept of polymorphism in object-oriented programming. Provide examples in JavaScript and TypeScript.",
  "How would you design a URL shortener like Bit.ly? Describe the database schema and logic behind it.",
  "What are the differences between React’s useState and useReducer hooks? When should you use each?",
];

export default function QuestionsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="bg-[#303132] ">
      <Navbar />
      <main className="md:mx-12 mx-6">
        <section className="flex md:flex-row h-[75vh] flex-col">
          <QuestionPanel question={questions[currentIndex]} />
          <AnswerPanel />
        </section>

        <div className="flex flex-row justify-between my-8 ">
          <Button
            className="bg-[#9386E4] hover:bg-purple-800 hover:text-gray-800 px-6 py-3 sm:text-xl sm:px-12 sm:py-5 rounded-full text-gray-950 font-bold disabled:opacity-50"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </Button>
          <Button
            className="bg-[#9386E4] hover:bg-purple-800 hover:text-gray-800 px-6 py-3 sm:text-xl sm:px-12 sm:py-5 rounded-full text-gray-950 font-bold disabled:opacity-50"
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
          >
            Next
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
