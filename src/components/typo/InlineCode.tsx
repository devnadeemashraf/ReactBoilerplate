import { HTMLElementProps } from "@/types/globals";

const InlineCode = ({ children, className, ...props }: HTMLElementProps) => {
  return (
    <code
      className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}
      {...props}
    >
      {children}
    </code>
  );
};

export default InlineCode;
