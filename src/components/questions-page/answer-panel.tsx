import TextEditor from "./text-editor";

export default function AnswerPanel({
  currentIndex,
  answers,
  setAnswers,
}: {
  currentIndex: number;
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <div className="w-full h-full">
      <div className="py-2 px-4 w-full border-b border-gray-800">
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
