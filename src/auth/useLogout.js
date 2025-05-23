import { Logout } from "@/api/apiCalls";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/config/queryClient";

// invalidate user session and removes all the cached information
export function useLogout() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => Logout(),
    onSuccess: () => {
      toast.success("Logout successful");
      queryClient.clear();
      navigate("/login");
    },

    onError: (error) => {
      toast.error(`Logout failed: ${error.response.data.message}`);
      navigate("/login");
    },
  });
}
