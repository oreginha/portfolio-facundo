import { cn } from "@/utils/cn";
import { ComponentProps } from "@/types";

interface ProgressProps extends ComponentProps {
  value: number;
  max?: number;
  showValue?: boolean;
}

export function Progress({ value, max = 100, showValue = false, className }: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="w-full bg-secondary rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <span className="text-sm font-medium text-muted-foreground min-w-[3rem] text-right">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}
