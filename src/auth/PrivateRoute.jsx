import { useUser } from "@/auth/useUser";
import Loader from "@/widget/Loader";
import { Outlet, Navigate } from "react-router-dom";

// validates user session before redirecting to the app
const PrivateRoute = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <Loader loadingMessage="Loading User Information...." />;
  }

  // allow user to pass, if user is defined
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
