import { HTMLParagraphElementProps } from "@/types/globals";

const Lead = ({ children, className, ...props }: HTMLParagraphElementProps) => {
  return (
    <p className={`text-xl text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  );
};

export default Lead;
