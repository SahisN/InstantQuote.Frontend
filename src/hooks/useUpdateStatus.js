import { updateStatus } from "@/api/apiCalls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdateStatus(quoteId) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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
