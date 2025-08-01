import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const buttons = [
  "C", "←", "÷", "×",
  "7", "8", "9", "-",
  "4", "5", "6", "+",
  "1", "2", "3", "=",
  "0", ".", 
];

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
      setResult(null);
    } else if (value === "←") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      try {
        const expression = input.replace(/×/g, "*").replace(/÷/g, "/");
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 w-[340px]">
      <Display input={input} result={result} />
      <div className="grid grid-cols-4 gap-3 mt-4">
        {buttons.map((btn, idx) => (
          <Button key={idx} label={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
}
