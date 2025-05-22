import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { looseQuoteFormSchema } from "./looseQuoteFormSchema";
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

export default function QuoteForm({ onSubmit, isLoading }) {
  const form = useForm({
    resolver: zodResolver(looseQuoteFormSchema),
    defaultValues: {
      nameInsured: "",
      companyAddress: "",
      classCode: "",
      exposureAmount: "",
    },
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6 py-[20px]">
        <div className="space-y-[40px]">
          <FormField
            control={form.control}
            name="nameInsured"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Insured Name</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Address</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="classCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Class Code</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    {...field}
                    className="w-full"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="exposureAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Exposure Amount</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    {...field}
                    className="w-full"
                    type="number"
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
              Submitting...
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </>
          ) : (
            "Get a quote"
          )}
        </Button>
      </form>
    </Form>
  );
}
