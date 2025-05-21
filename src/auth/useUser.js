import { getUser } from "@/api/apiCalls";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { QueryKeys } from "@/config/queryKeys";
import { useEffect } from "react";

export function useUser() {
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: [QueryKeys.USER],
    queryFn: () => getUser(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  useEffect(() => {
    if (query.isError) {
      //toast.error(query.error.response.data.message);
      navigate("/login");
    }
  }, [query.isError, query.error, navigate]);

  return query;
}
