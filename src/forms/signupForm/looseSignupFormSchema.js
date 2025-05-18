import * as z from "zod";

export const looseSignupFormSchema = z
  .object({
    username: z.string().min(1, "Username is required"),
    email: z.string().min(1, "Email is required").email("Email must be valid"),
    password: z.string().min(5, "Password must be at least 5 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword == data.password, {
    path: ["confirmPassword"],
    message: "Passwords doesn't match",
  });
