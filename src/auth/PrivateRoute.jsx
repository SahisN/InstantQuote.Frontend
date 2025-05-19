import { useUser } from "@/hooks/useUser";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const { data: user, isLoading } = useUser();
  console.log("User data:", user);
  console.log("Is loading:", isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
