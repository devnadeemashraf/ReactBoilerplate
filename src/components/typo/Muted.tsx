import { HTMLParagraphElementProps } from "@/types/globals";

const Muted = ({
  children,
  className,
  ...props
}: HTMLParagraphElementProps) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  );
};

export default Muted;
