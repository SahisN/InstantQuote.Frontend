import { useUser } from "@/hooks/useUser";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
