export default function QuestionPanel({ question }: { question: string }) {
  return (
    <div className="  bg-[#252526] w-1/2 h-full p-4">
      <div className="flex flex-row justify-between">
        <p className="">EXPLORER</p>
        <span className="font-bold tracking-widest">...</span>
      </div>
      <p className="text-3xl my-8 font-bold">Question</p>
      <p className="text-xl font-mono">{question}</p>
    </div>
  );
}
