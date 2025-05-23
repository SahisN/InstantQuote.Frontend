import { signup } from "@/api/apiCalls";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// sends user information to create user, then redirects to login
export function useSignup() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ username, email, password }) =>
      signup({ username, email, password }),
    onSuccess: (data) => {
      console.log("Signup response:", data);
      toast.success("Signup successful");
      navigate("/login");
    },

    onError: (error) => {
      toast.error(`Signup failed: ${error.response.data.message}`);
    },
  });
}
