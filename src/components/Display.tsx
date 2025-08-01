interface DisplayProps {
  input: string;
  result: string | null;
}

export default function Display({ input, result }: DisplayProps) {
  return (
    <div className="bg-gray-900 text-white rounded-xl px-4 py-3 min-h-[80px] flex flex-col items-end justify-center">
      <div className="text-sm text-gray-400">{input || "0"}</div>
      <div className="text-2xl font-semibold">{result ?? ""}</div>
    </div>
  );
}
