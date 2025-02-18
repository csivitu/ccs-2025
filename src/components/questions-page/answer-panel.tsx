import TextEditor from "./text-editor";

export default function AnswerPanel({ currentIndex, answers, setAnswers }: { currentIndex: number; answers: string[]; setAnswers: React.Dispatch<React.SetStateAction<string[]>> }) {
  return (
    <div className="w-full h-full">
      <div className=" px-6 py-2 m-1 w-fit">
      <p className="flex items-center gap-2">
          <span className="text-[#519ABA]">Ts</span> 
          <span className="mx-1">Answer File</span> 
          <span className="text-[#CCCCCC]">X</span>
        </p>

      </div>
      <TextEditor currentIndex={currentIndex} answers={answers} setAnswers={setAnswers} />
    </div>
  );
}
