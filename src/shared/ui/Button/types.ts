import type React from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "src/shared";

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
