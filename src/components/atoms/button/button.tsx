import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">;
export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "h-[50px] bg-custom-blue-90 flex justify-center items-center text-base text-white font-bold w-full rounded-3xl",
        className
      )}
    />
  );
};
