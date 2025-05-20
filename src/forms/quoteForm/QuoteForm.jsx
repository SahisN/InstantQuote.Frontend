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

export default function QuoteForm({ onSubmit }) {
  const form = useForm({
    resolver: zodResolver(looseQuoteFormSchema),
    defaultValues: {
      insuredName: "",
      companyAddress: "",
      classCode: "",
      exposureAmount: "",
    },
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4 py-[20px]">
        <div className="space-y-[30px]">
          <FormField
            control={form.control}
            name="insuredName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Insured Name</FormLabel>
                <FormControl>
                  <Input {...field} className="w-[300px]" />
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
                  <Input {...field} className="w-[300px]" />
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
                  <Input {...field} className="w-[300px]" />
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
                  <Input {...field} className="w-[300px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full" type="submit">
          Get a Quote
        </Button>
      </form>
    </Form>
  );
}
