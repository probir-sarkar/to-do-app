import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserId } from "../redux/user/userSelector";

interface PrivateRouteProps {
  component: React.FC;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
  const currentUser = useSelector(selectUserId);
  console.log("currentUser", currentUser);

  const navigate = useNavigate();

  if (currentUser === "" || !currentUser) {
    navigate("/login");
    return null;
  }

  return <Component {...rest} />;
};
export default PrivateRoute;
