import { useUser } from "@/auth/useUser";
import Loader from "@/widget/Loader";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const { data: user, isLoading } = useUser();
  console.log("User data:", user);
  console.log("Is loading:", isLoading);

  if (isLoading) {
    return <Loader loadingMessage="Loading User Information...." />;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
