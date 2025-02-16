import { RiArrowDropDownLine } from "react-icons/ri";

export default function QuestionPanel({ question }: { question: string }) {
  return (
    <div className="bg-[#252526] md:w-3/4 md:h-[101.25%] h-auto pr-6">
      <div className="flex flex-row justify-between">
        <p className="text-[15px] ml-8 text-[#CCC] font-inter font-normal uppercase leading-normal mt-3">
          EXPLORER
        </p>
        <span className="mt-2 mr-2 font-bold tracking-widest">...</span>
      </div>

      <div className="mt-4 flex items-center gap-0 ml-[-4px] my-8 ">
        <RiArrowDropDownLine className="text-4xl text-zinc-400 mt-[-10px]" /> 
        <p className="text-[20px]  font-normal font-[700] text-[#EBEBEB] font-sans-code mt-[-10px]">QUESTION</p>
      </div>

      <p className="md:text-[16px] font-mono ml-8 mt-[-10px] font-mono text-[#D4D4EB]">{question}</p>
    </div>
  );
}
