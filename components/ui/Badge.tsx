type BadgeVariant = "dark" | "yellow" | "green" | "violet" | "gray";

const badgeVariants: Record<BadgeVariant, string> = {
  dark: "bg-gray-900 text-white",
  yellow: "bg-yellow-300 text-gray-900",
  green: "bg-green-200 text-gray-900",
  violet: "bg-violet-200 text-violet-800",
  gray: "bg-gray-100 text-gray-600",
};

export function Badge({
  variant = "gray",
  className = "",
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`
        inline-flex items-center gap-1
        px-3 py-1 rounded-full
        text-xs font-semibold
        ${badgeVariants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
