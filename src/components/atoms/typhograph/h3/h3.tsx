import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type H3Props = ComponentProps<"h1">;
export const H3 = ({ className, ...rest }: H3Props) => {
  return (
    <h3
      {...rest}
      className={twMerge("text-white text-lg font-bold", className)}
    />
  );
};
