import PrivateRoute from "@/auth/PrivateRoute";
import ClassCodeLookup from "@/pages/ClassCodeLookup";
import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import QuoteHistory from "@/pages/QuoteHistory";
import ShowQuote from "@/pages/sub_pages/ShowQuote";
import Signup from "@/pages/Signup";
import QuoteDetails from "@/pages/sub_pages/QuoteDetails";
import PageNotFound from "@/pages/PageNotFound";

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

      {
        path: "quote-details/:id",
        element: (
          <Layout>
            <QuoteDetails />
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

  {
    path: "*",
    element: <PageNotFound />,
  },
];
