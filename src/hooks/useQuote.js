import { Quote } from "@/api/apiCalls";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useQuote() {
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
    },

    onError: (error) => {
      toast.error(`Quote submission failed: ${error.response.data.message}`);
    },
  });
}
