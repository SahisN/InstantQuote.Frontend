import PrivateRoute from "@/auth/PrivateRoute";
import ClassCodeLookup from "@/pages/ClassCodeLookup";
import Dashboard from "@/pages/Dashboard";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import QuoteHistory from "@/pages/QuoteHistory";
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
    path: "/lookup",
    element: (
      <Layout>
        <ClassCodeLookup />
      </Layout>
    ),
  },

  {
    path: "/history",
    element: (
      <Layout>
        <QuoteHistory />
      </Layout>
    ),
  },

  {
    path: "/login",
    element: <Login />,
  },

  { path: "/signup", element: <Signup /> },
];
