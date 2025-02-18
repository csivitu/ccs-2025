import { RiArrowDropDownLine } from "react-icons/ri";

export default function QuestionPanel({ question }: { question: string }) {
  return (
    <div className="md:w-3/4 md:h-[101.25%] h-auto pr-6">
      <div className="mt-4 flex items-center gap-0 ml-[-4px] my-8 ">
        <RiArrowDropDownLine className="text-4xl text-zinc-400 mt-[-10px]" /> 
        <p className="text-[20px]  font-normal font-[700] text-[#EBEBEB] font-sans-code mt-[-10px]">QUESTION</p>
      </div>

      <p className="md:text-[16px] font-mono ml-8 mt-[-10px] font-mono text-[#D4D4EB]">{question}</p>
    </div>
  );
}
