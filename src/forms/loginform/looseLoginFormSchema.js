import * as z from "zod";

export const looseLoginFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Email must be valid"),
  password: z.string().min(5, "Password must be at least 5 characters long"),
});
