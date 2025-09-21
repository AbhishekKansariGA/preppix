import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  text?: string;
}

export function Loader({ className, text }: LoaderProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center h-full gap-4 py-16", className)}>
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      {text && <p className="text-muted-foreground text-lg">{text}</p>}
    </div>
  );
}
