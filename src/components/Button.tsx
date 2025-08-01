interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  const isOperator = /[÷×\-+=]/.test(label);
  const isAction = label === "C" || label === "←";

  return (
    <button
      className={`
        text-xl py-4 rounded-lg transition
        ${isOperator ? "bg-indigo-500 text-white" :
          isAction ? "bg-red-400 text-white" :
          "bg-gray-100 text-gray-900 hover:bg-gray-200"}
        ${label === "=" && "col-span-1 bg-green-500 hover:bg-green-600"}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
