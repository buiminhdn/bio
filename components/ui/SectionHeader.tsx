import { Badge } from "./Badge";

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        centered
          ? "items-center text-center mx-auto max-w-2xl"
          : "max-w-2xl"
      }`}
    >
      {eyebrow && <Badge variant="gray">{eyebrow}</Badge>}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
}
