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
        "w-8 h-8 flex items-center justify-center rounded-md transition-all border text-sm select-none",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        !disabled && "active:scale-95",
        selected
          ? "bg-blue-500 text-white hover:bg-blue-600 border-blue-500"
          : "bg-gray-100 hover:bg-gray-200 hover:border-gray-300 border-transparent",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...rest}>
      {children}
    </button>
  );
};
