import { useUser } from "@/auth/useUser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QuoteForm from "@/forms/quoteForm/QuoteForm";
import { useQuote } from "@/hooks/useQuote";

export default function Dashboard() {
  const { mutate: quote, isPending } = useQuote();
  const { data: user } = useUser();

  const handleQuoteSubmit = (data) => {
    quote({
      nameInsured: data.nameInsured,
      companyAddress: data.companyAddress,
      classCode: data.classCode,
      exposureAmount: data.exposureAmount,
    });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen rounded-lg shadow-lg">
      <div className="w-full max-w-3xl h-full">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-blue-700 tracking-tight">
            Welcome, {user.data.username ? user.data.username : "User"}
          </h1>
        </div>
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">
          Get Insurance Quote
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Fill out the details below including the insured's name, business
          address, class code, and exposure amount. We will use this information
          to prepare your quote.
        </p>
        <div className="flex">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">Business Information</CardTitle>
              <CardDescription className="text-lg">
                Please provide the following information to get your insurance
                quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuoteForm
                onSubmit={handleQuoteSubmit}
                isLoading={isPending}
                editMode={false}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
