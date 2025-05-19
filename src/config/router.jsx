import PrivateRoute from "@/auth/PrivateRoute";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

export const routerConfig = [
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  { path: "/signup", element: <Signup /> },
];
