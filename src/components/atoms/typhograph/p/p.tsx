import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type IPProps = ComponentProps<"p">;

export const P = ({ className, ...rest }: IPProps) => {
  return <p {...rest} className={twMerge("text-base text-white", className)} />;
};
