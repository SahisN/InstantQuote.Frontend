import { useUser } from "@/auth/useUser";
import Loader from "@/widget/Loader";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = () => {
  const { data: user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isLoading) {
      console.log(user);
      // Small delay to ensure state is updated
      const timer = setTimeout(() => {
        navigate("/app/dashboard", { replace: true });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return <Loader loadingMessage="Loading User Information...." />;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
