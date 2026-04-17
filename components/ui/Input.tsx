import { InputHTMLAttributes } from "react";

export function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`
        w-full min-h-[44px] px-6 py-4
        bg-white text-gray-900
        border-2 border-gray-900 rounded-3xl
        shadow-brutal
        placeholder:text-gray-400 text-lg
        focus:outline-none focus:ring-0
        transition-all duration-150
        ${className}
      `}
      {...props}
    />
  );
}
