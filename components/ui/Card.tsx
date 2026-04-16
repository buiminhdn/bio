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
        p-8 md:p-10
        shadow-brutal
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}
