import { HTMLHeadingElementProps } from "@/types/globals";

const H4 = ({ children, className, ...props }: HTMLHeadingElementProps) => {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
};

export default H4;
