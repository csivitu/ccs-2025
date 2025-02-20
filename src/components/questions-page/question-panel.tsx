import { RiArrowDropDownLine } from "react-icons/ri";

export default function QuestionPanel({ question }: { question: string }) {
  return (
    <div className="md:w-full md:h-full h-auto">
      <div className="flex items-center gap-0 border-b border-gray-800">
        <RiArrowDropDownLine className="text-4xl text-zinc-400 " />
        <p className="text-[20px]  font-normal text-[#EBEBEB] font-sans-code">
          QUESTION
        </p>
      </div>

      <p className="md:text-[16px] font-mono text-[#D4D4EB] p-4">{question}</p>
    </div>
  );
}
