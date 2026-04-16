import { InputHTMLAttributes } from "react";

export function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`
        w-full min-h-[44px] px-4 py-2.5
        bg-white text-gray-900
        border border-gray-300 rounded-xl
        placeholder:text-gray-400 text-sm
        focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
        transition-all duration-150
        ${className}
      `}
      {...props}
    />
  );
}
