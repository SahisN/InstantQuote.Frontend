import { useUser } from "@/auth/useUser";
import Loader from "@/widget/Loader";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { data: user, isLoading } = useUser();
  console.log(user);

  if (isLoading) {
    return <Loader loadingMessage="Loading User Information...." />;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
