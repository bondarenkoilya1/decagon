import type { ComponentProps, FC } from "react";

import { cn } from "src/shared";

export const Container: FC<ComponentProps<"div">> = ({ className, children, ...props }) => {
  return (
    <div className={cn("max-w-[1620px] mx-auto", className)} {...props}>
      {children}
    </div>
  );
};
