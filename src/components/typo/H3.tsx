import { HTMLHeadingElementProps } from "@/types/globals";

const H3 = ({ children, className, ...props }: HTMLHeadingElementProps) => {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export default H3;
