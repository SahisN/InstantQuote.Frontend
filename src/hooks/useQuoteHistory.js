import { quoteHistory } from "@/api/apiCalls";
import { QueryKeys } from "@/config/queryKeys";
import { useNavigate } from "react-router-dom";

export default function useQuoteHistory() {
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: [QueryKeys.QUOTE_HISTORY],
    queryFn: () => quoteHistory(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (query.isError) {
    toast.error(query.error.response.data.message);
    navigate("/login");
  }

  return query;
}
