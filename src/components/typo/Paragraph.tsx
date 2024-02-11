import { HTMLParagraphElementProps } from "@/types/globals";

const Paragraph = ({
  children,
  className,
  ...props
}: HTMLParagraphElementProps) => {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
