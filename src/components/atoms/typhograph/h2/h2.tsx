import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type H2Props = ComponentProps<"h2">;
export const H2 = ({ className, ...rest }: H2Props) => {
  return (
    <h2
      {...rest}
      className={twMerge("text-white text-base font-medium", className)}
    />
  );
};
