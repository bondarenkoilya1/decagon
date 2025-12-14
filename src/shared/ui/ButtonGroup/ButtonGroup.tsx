"use client";
import type { ComponentProps, FC } from "react";
import { type VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";

import { buttonGroupVariants, cn, Separator } from "src/shared";

export const ButtonGroup: FC<ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>> = ({
  className,
  orientation,
  ...props
}) => {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  );
};

export const ButtonGroupText: FC<ComponentProps<"div"> & { asChild?: boolean }> = ({
  className,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
};

export const ButtonGroupSeparator: FC<ComponentProps<typeof Separator>> = ({
  className,
  orientation = "vertical",
  ...props
}) => {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  );
};
