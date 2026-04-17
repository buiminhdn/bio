export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        bg-white border-2 border-gray-900 rounded-3xl
        shadow-brutal
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}
