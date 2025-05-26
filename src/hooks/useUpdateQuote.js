import { updateQuote } from "@/api/apiCalls";
import { queryClient } from "@/config/queryClient";
import { QueryKeys } from "@/config/queryKeys";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateQuote(quoteId) {
  return useMutation({
    mutationFn: ({ nameInsured, companyAddress, classCode, exposureAmount }) =>
      updateQuote({
        nameInsured,
        companyAddress,
        classCode,
        exposureAmount,
        quoteId,
      }),
    onSuccess: () => {
      toast.success("Successfully updated");
      queryClient.invalidateQueries({ queryKey: [QueryKeys.QUOTE, quoteId] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.QUOTE_HISTORY] });
    },

    onError: (error) => {
      toast.error(`Failed to save changes: ${error.response.data.message}`);
    },
  });
}
