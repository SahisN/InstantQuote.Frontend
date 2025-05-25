import { login } from "@/api/apiCalls";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// used for authenticating user
export function useLogin() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
      toast.success("Login successful");
      navigate("/app/dashboard");
    },

    onError: (error) => {
      toast.error(`Login failed: ${error.response.data.message}`);
    },
  });
}
