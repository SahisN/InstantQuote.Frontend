import { Quote } from "@/api/apiCalls";
import { QueryKeys } from "@/config/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useQuote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ nameInsured, companyAddress, classCode, exposureAmount }) =>
      Quote({
        nameInsured,
        companyAddress,
        classCode,
        exposureAmount,
      }),
    onSuccess: (data) => {
      toast.success("Quote submitted successfully");
      queryClient.invalidateQueries({ queryKey: [QueryKeys.QUOTE_HISTORY] });
    },

    onError: (error) => {
      toast.error(`Quote submission failed: ${error.response.data.message}`);
    },
  });
}
