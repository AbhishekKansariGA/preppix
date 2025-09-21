
import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  text?: string;
}

export function Loader({ className, text = "Loading..." }: LoaderProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center h-full gap-4 py-16", className)}>
      <div className="animate-pulse text-lg text-muted-foreground">{text}</div>
    </div>
  );
}
