import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { looseLoginFormSchema } from "./looseLoginFormSchema";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function LoginForm({ onSubmit, isLoading }) {
  const form = useForm({
    resolver: zodResolver(looseLoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-[30px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    disabled={isLoading}
                    {...field}
                    className="w-[300px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    disabled={isLoading}
                    type="password"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={isLoading} className="w-full" type="submit">
          {isLoading ? (
            <>
              Signing In...
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </Form>
  );
}
