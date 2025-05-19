import PrivateRoute from "@/auth/PrivateRoute";
import Dashboard from "@/pages/Dashboard";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

export const routerConfig = [
  {
    // path: "/",
    // element: <PrivateRoute />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Dashboard />,
    //   },
    // ],

    path: "/",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },

  {
    path: "/login",
    element: <Login />,
  },

  { path: "/signup", element: <Signup /> },
];
