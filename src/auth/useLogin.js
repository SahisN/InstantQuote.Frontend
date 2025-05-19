import { login } from "@/api/apiCalls";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (data) => {
      toast.success("Login successful");
      navigate("/");
    },

    onError: (error) => {
      toast.error(`Login failed: ${error.message}`);
    },
  });
}
