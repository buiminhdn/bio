import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent";

const variants: Record<Variant, string> = {
  primary: "bg-gray-900 text-white hover:bg-gray-800",
  secondary: "bg-white text-gray-900 hover:bg-gray-50",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 shadow-none border-transparent",
  accent: "bg-yellow-300 text-gray-900 hover:bg-yellow-400",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: Variant; className?: string } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        min-h-[44px] px-8 py-3
        rounded-2xl text-base font-bold
        cursor-pointer
        transition-colors duration-200
        ${variant !== 'ghost' ? 'border-2 border-gray-900 shadow-brutal' : ''}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
