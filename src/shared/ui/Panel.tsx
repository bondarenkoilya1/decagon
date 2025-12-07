import type { ComponentPropsWithoutRef, ElementType, ReactElement } from "react";
import type { Children } from "src/shared";

import { cn } from "src/shared";

type PanelProps<T extends ElementType> = Children &
  ComponentPropsWithoutRef<T> & {
    className?: string;
    tag?: T;
  };

export const Panel = <T extends ElementType = "div">({
  className,
  children,
  tag,
  ...props
}: PanelProps<T>): ReactElement => {
  const Tag = tag || "div";

  return (
    <Tag className={cn("p-3 border border-solid rounded shadow-xs", className)} {...props}>
      {children}
    </Tag>
  );
};
