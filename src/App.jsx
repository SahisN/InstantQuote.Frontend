import { routerConfig } from "@/config/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routerConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
