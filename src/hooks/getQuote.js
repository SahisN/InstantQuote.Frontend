import { quoteDetails } from "@/api/apiCalls";
import { QueryKeys } from "@/config/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function getQuote(quoteId) {
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: [QueryKeys.QUOTE, quoteId],
    queryFn: () => quoteDetails(quoteId),
    staleTime: 1000 * 60 * 5,
  });

  if (query.isError) {
    navigate("/app/history");
  }

  return query;
}
