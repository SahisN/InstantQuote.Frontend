import { routerConfig } from "@/config/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "@/config/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(routerConfig);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
