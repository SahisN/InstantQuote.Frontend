import * as z from "zod";

export const looseQuoteFormSchema = z.object({
  insuredName: z.string().min(1, { message: "Name is required" }),
  companyAddress: z.string().min(1, { message: "Company address is required" }),
  classCode: z.string().min(1, { message: "Class code is required" }),
  exposureAmount: z.string().min(1, { message: "Exposure amount is required" }),
});
