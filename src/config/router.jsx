import PrivateRoute from "@/auth/PrivateRoute";
import ClassCodeLookup from "@/pages/ClassCodeLookup";
import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import QuoteHistory from "@/pages/QuoteHistory";
import ShowQuote from "@/pages/ShowQuote";
import Signup from "@/pages/Signup";

export const routerConfig = [
  {
    path: "/app",
    element: <PrivateRoute />,
    children: [
      {
        path: "dashboard",
        element: (
          <Layout>
            <Dashboard />
          </Layout>
        ),
      },

      {
        path: "lookup",
        element: (
          <Layout>
            <ClassCodeLookup />
          </Layout>
        ),
      },

      {
        path: "history",
        element: (
          <Layout>
            <QuoteHistory />
          </Layout>
        ),
      },

      {
        path: "quote",
        element: (
          <Layout>
            <ShowQuote />
          </Layout>
        ),
      },
    ],
  },

  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  { path: "/signup", element: <Signup /> },
];
