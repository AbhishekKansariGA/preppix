
import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  text?: string;
}

export function Loader({ className, text }: LoaderProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", text ? "h-full gap-4 py-16" : "py-0", className)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("animate-spin", className)}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    </div>
  );
}

    