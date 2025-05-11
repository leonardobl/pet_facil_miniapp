import { ComponentProps } from "react";

interface IfProps extends ComponentProps<"div"> {
  condition: boolean;
}

export const If = ({ condition, children }: IfProps) => {
  if (!condition) return null;
  return <>{children}</>;
};
