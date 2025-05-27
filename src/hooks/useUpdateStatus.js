import { updateStatus } from "@/api/apiCalls";
import { queryClient } from "@/config/queryClient";
import { QueryKeys } from "@/config/queryKeys";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdateStatus(quoteId) {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (status) => updateStatus({ quoteId, status }),

    onSuccess: () => {
      toast.success("Status Updated");
      queryClient.invalidateQueries({ queryKey: [QueryKeys.QUOTE, quoteId] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.QUOTE_HISTORY] });
    },

    onError: (error) => {
      toast.error(`Failed to update status ${error.response.data.message}`);
      navigate("/app/history");
    },
  });
}
