import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type WrapperProps = ComponentProps<"div">;

export const Wrapper = ({ className, ...rest }: WrapperProps) => {
  return (
    <div {...rest} className={twMerge("w-full h-full px-6 pt-6", className)} />
  );
};
