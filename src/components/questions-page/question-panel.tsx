export default function QuestionPanel({ question }: { question: string }) {
  return (
    <div className="  bg-[#252526] md:w-1/2 md:h-full h-auto p-4">
      <div className="flex flex-row justify-between">
        <p className="text-sm sm:text-base">EXPLORER</p>
        <span className="font-bold tracking-widest">...</span>
      </div>
      <p className="text-lg sm:text-xl md:text-2xl my-8 font-bold">Question</p>
      <p className="md:text-lg font-mono">{question}</p>
    </div>
  );
}
