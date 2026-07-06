import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  id?: string;
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-5 ${alignment} mb-14 md:mb-20`}>
      {eyebrow ? (
        <span className="eyebrow">
          <span className="eyebrow-dot" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={id}
        className="max-w-4xl font-display text-4xl font-medium leading-[1.12] tracking-tight text-heading md:text-5xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
