import { createQuote } from "@/api/apiCalls";
import { QueryKeys } from "@/config/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useQuote() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ nameInsured, companyAddress, classCode, exposureAmount }) =>
      createQuote({
        nameInsured,
        companyAddress,
        classCode,
        exposureAmount,
      }),
    onSuccess: (data) => {
      toast.success("Quote submitted successfully");
      queryClient.invalidateQueries({ queryKey: [QueryKeys.QUOTE_HISTORY] });

      navigate("/app/quote", {
        state: {
          createdAt: data.createdAt,
          nameInsured: data.nameInsured,
          companyAddress: data.companyAddress,
          classCode: data.classCode,
          exposureAmount: data.exposureAmount,
          premium: data.premium,
        },
      });
    },

    onError: (error) => {
      toast.error(`Quote submission failed: ${error.response.data.message}`);
      navigate("/login");
    },
  });
}
