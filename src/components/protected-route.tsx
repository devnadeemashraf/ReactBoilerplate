import React from "react";

type TProtectedProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: TProtectedProps) => {
  return children;
};

export default ProtectedRoute;
