import type { ClassValue } from "clsx";

export type ChildrenProps = {
  children: React.ReactNode;
};

export type ClassNameWithChildrenProps = ChildrenProps & {
  className?: ClassValue;
};

export type HTMLHeadingElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export type HTMLQuoteElementProps = React.DetailedHTMLProps<
  React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

export type HTMLElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;
export type HTMLDivElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type HTMLParagraphElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
