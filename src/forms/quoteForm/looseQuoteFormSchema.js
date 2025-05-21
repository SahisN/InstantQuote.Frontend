import * as z from "zod";
import classCode from "@/static/gl_code";

export const looseQuoteFormSchema = z
  .object({
    nameInsured: z.string().min(1, { message: "Name is required" }),
    companyAddress: z
      .string()
      .min(1, { message: "Company address is required" }),
    classCode: z
      .string()
      .min(5, { message: "Class code must be at least 5 digits" }),
    exposureAmount: z
      .string()
      .min(1, { message: "Exposure amount is required" }),
  })
  .refine((data) => classCode.some((item) => item.code == data.classCode), {
    path: ["classCode"],
    message: "Invalid class code",
  });
