"use client";
import { type ButtonHTMLAttributes, type FC } from "react";

import { cn } from "src/shared";

type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
};

export const Badge: FC<BadgeProps> = ({
  children,
  onClick,
  className,
  selected = false,
  disabled,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md border text-sm transition-all select-none",
        "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none",
        !disabled && "active:scale-95",
        selected
          ? "border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
          : "border-transparent bg-gray-100 hover:border-gray-300 hover:bg-gray-200",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      {...rest}>
      {children}
    </button>
  );
};
