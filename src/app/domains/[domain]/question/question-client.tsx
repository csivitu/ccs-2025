"use client";
import { useState } from "react";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/Navbar";
import QuestionPanel from "@/components/questions-page/question-panel";
import AnswerPanel from "@/components/questions-page/answer-panel";
import { Button } from "@/components/ui/button";
import { VscExtensions } from "react-icons/vsc";
import { Question } from "@prisma/client";
import { submitQuestion } from "@/app/actions/questions";
import { redirect } from "next/navigation";

export default function QuestionsPage({
  questions,
  answers: initialAnswers,
  sessionId,
}: {
  questions: Question[];
  answers: string[];
  sessionId: string;
}) {
  const handlePrevious = () => {
    console.log(answers);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(() => {
    // Find first unanswered question
    const firstUnansweredIndex = initialAnswers.findIndex((answer) => !answer);
    return firstUnansweredIndex === -1 ? 0 : firstUnansweredIndex;
  });
  const [answers, setAnswers] = useState<string[]>(initialAnswers);

  const handleNext = async () => {
    await submitQuestion({
      questionId: questions[currentIndex].id,
      answer: answers[currentIndex],
      sessionId,
    });

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    if (currentIndex === questions.length - 1) {
      // TODO: @padhai-head
      // toast.success("Quiz completed successfully!");
      redirect(`/domains?completed=true`);
    }
  };

  return (
    <div className="bg-[#303132] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 md:px-14 relative flex flex-col">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <aside className="hidden md:flex flex-col gap-2 fixed left-1 z-10">
          {[
            "/explorer.webp",
            "/search.webp",
            "/sourcecontrol.webp",
            "/run.webp",
            null,
            "/settings.webp",
          ].map((src, index) =>
            src ? (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-12 h-12 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            ) : (
              <VscExtensions
                key={index}
                className="w-6 h-6 ml-3 mt-1 mb-1 text-zinc-500 cursor-pointer hover:text-zinc-400 transition-colors"
              />
            )
          )}
        </aside>

        {/* Mobile navigation icons - Visible only on mobile */}
        <div className="flex md:hidden justify-center gap-4 py-4">
          {[
            "/explorer.webp",
            "/search.webp",
            "/sourcecontrol.webp",
            "/run.webp",
            null,
            "/settings.webp",
          ].map((src, index) =>
            src ? (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-8 h-8 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            ) : (
              <VscExtensions
                key={index}
                className="w-6 h-6 text-zinc-500 cursor-pointer hover:text-zinc-400 transition-colors"
              />
            )
          )}
        </div>

        {/* Main content with flex-grow */}
        <section className="flex flex-col md:flex-row gap-4 flex-grow">
          <div className="flex flex-col flex-grow">
            {/* Question Panel with min-height */}
            <div className="md:hidden mb-4 min-h-[150px] max-h-[300px] overflow-y-auto">
              <QuestionPanel question={questions[currentIndex].question} />
            </div>

            {/* Desktop Question Panel */}
            <div className="hidden md:block">
              <QuestionPanel question={questions[currentIndex].question} />
            </div>

            {/* Answer Panel with flex-grow */}
            <div className="flex-grow">
              <AnswerPanel
                currentIndex={currentIndex}
                answers={answers}
                setAnswers={setAnswers}
              />
            </div>
          </div>
        </section>

        {/* Navigation buttons with dynamic positioning */}
        <div className="sticky bottom-0 bg-[#303132] py-4 mt-auto">
          <div className="flex justify-between items-center px-2 md:px-0">
            <Button
              className="bg-[#9386E4] hover:bg-purple-300 hover:text-gray-800 px-4 py-2 md:px-12 md:py-5 text-sm md:text-xl rounded-full text-[#363960] font-bold transition-colors"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              &gt;&gt; Previous
            </Button>

            <Button
              className="bg-[#9386E4] hover:bg-purple-300 hover:text-gray-800 px-4 py-2 md:px-12 md:py-5 text-sm md:text-xl rounded-full text-[#363960] font-bold transition-colors"
              onClick={handleNext}
              disabled={
                currentIndex === questions.length - 1 && !answers[currentIndex]
              }
            >
              {currentIndex === questions.length - 1
                ? "Finish Quiz"
                : "Next >>"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
