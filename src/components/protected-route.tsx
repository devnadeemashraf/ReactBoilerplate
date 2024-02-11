import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return authenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
