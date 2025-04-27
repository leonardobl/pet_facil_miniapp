import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TextProps = ComponentProps<"p">;
export const Text = ({ className, ...rest }: TextProps) => {
  return <p {...rest} className={twMerge("text-white text-2xl", className)} />;
};
