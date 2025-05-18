import { login } from "@/api/apiCalls";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (data) => {
      toast.success("Login successful");
      console.log(data);
    },

    onError: (error) => {
      toast.error(`Login failed: ${error.message}`);
    },
  });
}
