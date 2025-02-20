"use client"
import { useState, useRef, useEffect } from "react";

export default function TextEditor({ currentIndex, answers, setAnswers }: { currentIndex: number; answers: string[]; setAnswers: React.Dispatch<React.SetStateAction<string[]>> }) {
  const [lines, setLines] = useState<number[]>([1]); // Start with line 1
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // Calculate actual line count based on newline characters
    const newLines = answers[currentIndex].split('\n').length;
    
    // Only update lines if the number of actual newline-separated lines has changed
    if (newLines !== lines.length) {
      const newLinesArray = Array.from({ length: newLines }, (_, i) => i + 1);
      setLines(newLinesArray);
    }
  }, [answers[currentIndex]]);

  return (
    <div className="flex w-full">
      <div
        ref={lineNumbersRef}
        className="text-right px-2 py-2 text-gray-500 min-w-[40px] overflow-hidden"
      >
        {lines.map((lineNumber) => (
          <div key={lineNumber}>{lineNumber}</div>
        ))}
      </div>

      <textarea
        ref={textAreaRef}
        value={answers[currentIndex]}
        onChange={(e) => setAnswers(prevAnswers => {
          const newAnswers = [...prevAnswers];
          newAnswers[currentIndex] = e.target.value;
          return newAnswers;
        })}
        onScroll={(e) => {
          if (lineNumbersRef.current) {
            lineNumbersRef.current.scrollTop = (e.target as HTMLTextAreaElement).scrollTop;
          }
        }}
        className="flex-1 p-2 outline-none overflow-y-auto font-mono resize-none bg-inherit"
        style={{ lineHeight: "1.5rem", whiteSpace: "pre-wrap", wordWrap: "break-word" }}
      />
    </div>
  );
}