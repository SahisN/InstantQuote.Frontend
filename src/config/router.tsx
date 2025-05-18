import { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
];
