import type { ComponentPropsWithoutRef, ElementType, FC, JSX, ReactNode } from "react";

import { cn } from "src/shared";

type TypographyElementProps = {
  children: ReactNode;
  className?: string;
};

const TypographyElementStyles = {
  H1: "scroll-m-20 text-4xl font-medium tracking-tight text-balance",
  // H2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  // H3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  H5: "scroll-m-20 text-xl font-semibold tracking-tight",
  P: "leading-7 [&:not(:first-child)]:mt-6",
  Highlighted: "text-blue-500 font-semibold",
  Shy: "text-sm text-gray-400",
  Ul: "my-6 ml-6 list-disc [&>li]:mt-2"
} as const;

const createTypographyComponent = <T extends keyof JSX.IntrinsicElements>(
  tag: T,
  styles: string
): FC<TypographyElementProps & ComponentPropsWithoutRef<T>> => {
  const Component: FC<TypographyElementProps & ComponentPropsWithoutRef<T>> = ({
    children,
    className,
    ...props
  }) => {
    const Element = tag as ElementType;
    return (
      <Element className={cn(styles, className)} {...props}>
        {children}
      </Element>
    );
  };
  Component.displayName = `Typography.${String(tag).toUpperCase()}`;
  return Component;
};

export const Typography = {
  H1: createTypographyComponent("h1", TypographyElementStyles.H1),
  // H2: createTypographyComponent("h2", TypographyElementStyles.H2),
  // H3: createTypographyComponent("h3", TypographyElementStyles.H3),
  H5: createTypographyComponent("h4", TypographyElementStyles.H5),
  P: createTypographyComponent("p", TypographyElementStyles.P),
  Highlighted: createTypographyComponent("span", TypographyElementStyles.Highlighted),
  Shy: createTypographyComponent("p", TypographyElementStyles.Shy),
  Ul: createTypographyComponent("ul", TypographyElementStyles.Ul)
} as const;
