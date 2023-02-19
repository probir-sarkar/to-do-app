import React from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  return <Component {...rest} />;
}

export default PrivateRoute;
