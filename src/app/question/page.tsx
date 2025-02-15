"use client"
import { useState } from "react";
import  Footer from "@/components/footer/footer";
import Navbar from "@/components/Navbar";
import QuestionPanel from "@/components/questions-page/question-panel";
import AnswerPanel from "@/components/questions-page/answer-panel";
import { Button } from "@/components/ui/button";
import { VscExtensions } from "react-icons/vsc";

const questions = [
  "The question is when not how.. If you were tasked with designing a futuristic transportation system for a city of 10 million people, where the main goal is to minimize environmental impact while maximizing efficiency and accessibility, how would you integrate various technologies like autonomous vehicles, renewable energy, AI-driven traffic management, and underground transit systems? Additionally, how would you address challenges related to urban planning, public acceptance, and the economic feasibility of such a project in both the short and long term?",
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
      <main className="md:mx-14 mx-6">
        <aside className="hidden md:flex flex-col gap-2 fixed left-1 top-[120px]">
  {[
    "/explorer.webp",
    "/search.webp",
    "/sourcecontrol.webp",
    "/run.webp",
    null,
    "/settings.webp",
  ].map((src, index) => (
    src ? (
      <img
        key={index}
        src={src}
        alt={`Image ${index + 1}`}
        className="w-12 h-12 rounded-lg"
      />
    ) : (
      <VscExtensions key={index} className="w-6 h-6 ml-3 mt-1 mb-1 text-zinc-500" />
    )
  ))}
</aside>
        <section className="flex md:flex-row h-[75vh] flex-col">
          <QuestionPanel question={questions[currentIndex]} />
          <AnswerPanel />
        </section>

        <div className="flex flex-row justify-between my-8 ">
        <Button
  className="bg-[#9386E4] hover:bg-purple-300 hover:text-gray-800 px-6 py-3 sm:text-xl sm:px-12 sm:py-5 rounded-full text-[#363960] font-bold disabled:opacity-50 
  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25),0px_0px_77.616px_0px_#675EA6,0px_0px_44.352px_0px_#675EA6,0px_0px_25.872px_0px_#675EA6,0px_0px_12.936px_0px_#675EA6,0px_0px_3.696px_0px_#675EA6,0px_0px_1.848px_0px_#675EA6]"
  onClick={handleNext}
  disabled={currentIndex === questions.length - 1}
>
  &gt;&gt; Previous
</Button>
          <Button
  className="bg-[#9386E4] hover:bg-purple-300 hover:text-gray-800 px-6 py-3 sm:text-xl sm:px-12 sm:py-5 rounded-full text-[#363960] font-bold disabled:opacity-50 
  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25),0px_0px_77.616px_0px_#675EA6,0px_0px_44.352px_0px_#675EA6,0px_0px_25.872px_0px_#675EA6,0px_0px_12.936px_0px_#675EA6,0px_0px_3.696px_0px_#675EA6,0px_0px_1.848px_0px_#675EA6]"
  onClick={handleNext}
  disabled={currentIndex === questions.length - 1}
>
  Next &gt;&gt;
</Button>
        </div>
      </main>
      <div className="mt-[-48px]">
      <Footer />
      </div>
    </div>
  );
}
