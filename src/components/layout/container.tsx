import { cn } from "@/lib/cn";
import { ComponentPropsWithRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithRef<T>, "as" | "className" | "children">;

export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

