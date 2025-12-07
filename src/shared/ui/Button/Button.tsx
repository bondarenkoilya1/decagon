import type { FC } from "react";

import { Slot } from "@radix-ui/react-slot";

import { type ButtonProps, buttonVariants, cn } from "src/shared";

export const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
