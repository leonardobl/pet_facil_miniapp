import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = ComponentProps<"h1">;
export const Title = ({ className, ...rest }: TitleProps) => {
  return (
    <h1
      {...rest}
      className={twMerge("text-white text-[32px] font-bold", className)}
    />
  );
};
