import TextEditor from "./text-editor";

export default function AnswerPanel({
  currentIndex,
  answers,
  setAnswers,
  topPosition,
}: {
  currentIndex: number;
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  topPosition: number;
  // WHYYYYYY DOOO III HAVVVE TO DO THIS  😭
}) {
  return (
    <div className="w-full h-full relative">
      <div
        className={`py-2 px-4 w-full border-b border-gray-800 md:fixed h-10 bg-[#09090b]`}
      >
        <p className="flex items-center gap-2 w-fit border-r-2 border-gray-800 pr-4 h-full">
          <span className="text-[#519ABA]">TS</span>
          <span className="font-mono">solution.ts</span>
        </p>
      </div>
      <TextEditor
        currentIndex={currentIndex}
        answers={answers}
        setAnswers={setAnswers}
      />
    </div>
  );
}
