import type { ComponentProps, FC } from "react";

import { cn } from "src/shared";

export const Skeleton: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
};
