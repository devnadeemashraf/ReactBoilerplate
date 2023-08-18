import React from "react";

type TWrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: TWrapperProps) => {
  return <main className="absolute w-full h-full px-6 pt-20">{children}</main>;
};

export default Wrapper;
