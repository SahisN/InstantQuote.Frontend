import { Logout } from "@/api/apiCalls";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => Logout(),
    onSuccess: () => {
      setTimeout(() => {
        toast.success("Logout successful");
        navigate("/login");
      }, 0);
    },

    onError: (error) => {
      toast.error(`Logout failed: ${error.response.data.message}`);
      navigate("/login");
    },
  });
}
