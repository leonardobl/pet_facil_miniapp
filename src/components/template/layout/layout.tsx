import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { If } from "../../atoms/if/if";

type ILayoutProps = ComponentProps<"div"> & {
  fallbackLoading?: React.ReactElement;
  fallbackError?: React.ReactElement;
  isLoading?: boolean;
  isError?: boolean;
  theme?: "bg-small" | "bg-medium" | "bg-large" | undefined;
};

export const Layout = ({
  isError = false,
  isLoading = false,
  fallbackError,
  fallbackLoading,
  children,
  className,
  theme,
  ...rest
}: ILayoutProps) => {
  const bgSmall = theme === "bg-small";
  const bgMedium = theme === "bg-medium";
  const bgLarge = theme === "bg-large";

  return (
    <div
      {...rest}
      className={twMerge(
        "flex flex-col min-h-dvh w-full",
        bgSmall && "layout-bgsmall",
        bgMedium && "layout-bgmedium",
        bgLarge && "layout-bglarge",
        className
      )}
    >
      <If condition={isLoading && !isError}>{fallbackLoading}</If>
      <If condition={isError}>{fallbackError}</If>
      <If condition={!isError && !isLoading}>{children}</If>
    </div>
  );
};
