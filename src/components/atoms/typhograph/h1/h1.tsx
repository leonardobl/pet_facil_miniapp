import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type H1Props = ComponentProps<"h1">;
export const H1 = ({ className, ...rest }: H1Props) => {
  return (
    <h1
      {...rest}
      className={twMerge("text-white text-[32px] font-bold", className)}
    />
  );
};
