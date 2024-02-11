import { HTMLQuoteElementProps } from "@/types/globals";

const BlockQuotes = ({
  children,
  className,
  ...props
}: HTMLQuoteElementProps) => {
  return (
    <blockquote
      className={`mt-6 border-l-2 pl-6 italic ${className}`}
      {...props}
    >
      {children}
    </blockquote>
  );
};

export default BlockQuotes;
