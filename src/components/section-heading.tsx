import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500/80">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

