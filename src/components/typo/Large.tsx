import { HTMLDivElementProps } from "@/types/globals";

const Large = ({ children, className, ...props }: HTMLDivElementProps) => {
  return (
    <div className={`text-lg font-semibold ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Large;
