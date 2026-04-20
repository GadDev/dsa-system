import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "difficulty" | "pattern";
};

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium",
        variant === "default" && "border-[#1F2933] bg-[#161D25] text-[#9AA4AF]",
        className,
      )}
    >
      {children}
    </span>
  );
}
