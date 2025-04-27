import { ComponentProps } from "react";

type ILayoutProps = ComponentProps<"div"> & {
  fallbackLoading?: React.ReactElement;
  fallbackError?: React.ReactElement;
  isLoading?: boolean;
  isError?: boolean;
};

export const Layout = ({
  isError = false,
  isLoading = false,
  fallbackError,
  fallbackLoading,
  children,
  ...rest
}: ILayoutProps) => {
  return (
    <div {...rest} className="flex flex-col min-h-dvh w-full">
      {isLoading && !isError && fallbackLoading}
      {isError && fallbackError}
      {!isError && !isLoading && children}
    </div>
  );
};
