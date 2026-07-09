import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading mb-4">
        {title.split(" ").map((word, i) => (
          <span
            key={i}
            className={i === title.split(" ").length - 1 ? "gradient-text" : ""}
          >
            {word}{" "}
          </span>
        ))}
      </h2>
      {description && (
        <p
          className={
            align === "center"
              ? "text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
              : "text-gray-400 max-w-2xl text-base md:text-lg"
          }
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
