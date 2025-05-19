import { getUser } from "@/api/apiCalls";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUser() {
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (query.isError) {
    toast.error(query.error.response.data.message);
    navigate("/login");
  }

  return query;
}
