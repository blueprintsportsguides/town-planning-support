import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "default" | "muted" | "primary" | "gradient";
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "default",
}: SectionProps) {
  const bgClasses = {
    default: "bg-white",
    muted: "bg-slate-50",
    primary: "bg-navy-700 text-white",
    gradient: "bg-navy-700 text-white",
  };

  return (
    <section
      id={id}
      className={cn("section-padding", bgClasses[background], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
