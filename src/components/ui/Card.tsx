import { cn } from "@/utils/cn";
import { ComponentProps } from "@/types";

interface CardProps extends ComponentProps {
  hover?: boolean;
}

export function Card({ className, children, hover = false }: CardProps) {
  return (
    <div 
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        hover && "transition-transform hover:scale-[1.02] hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends ComponentProps {}

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps extends ComponentProps {}

export function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps extends ComponentProps {}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}

interface CardContentProps extends ComponentProps {}

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  );
}

interface CardFooterProps extends ComponentProps {}

export function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)}>
      {children}
    </div>
  );
}
