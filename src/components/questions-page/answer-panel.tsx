import TextEditor from "./text-editor";

export default function AnswerPanel() {
  return (
    <div className="w-full h-full bg-[#252526]">
      <div className="bg-[#1E1E1E] px-6 py-2 m-1 w-fit">
        <p>Untitled</p>
      </div>
      <TextEditor />
    </div>
  );
}
