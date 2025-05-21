import { useUser } from "@/auth/useUser";
import QuoteForm from "@/forms/quoteForm/QuoteForm";
import { useQuote } from "@/hooks/useQuote";

export default function Dashboard() {
  const { mutate: quote } = useQuote();
  const { data: user } = useUser();

  const handleQuoteSubmit = (data) => {
    console.log("Quote data:", data);
    // Perform quote submission logic here
    // For example, you can send the data to an API endpoint
    quote({
      nameInsured: data.nameInsured,
      companyAddress: data.companyAddress,
      classCode: data.classCode,
      exposureAmount: data.exposureAmount,
    });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen rounded-lg shadow-lg">
      <div className="w-full max-w-xl h-full text-center p-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-blue-700">
            Welcome {user.data.username ? user.data.username : "User"},
          </h1>
        </div>
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Get Your Insurance Quote
        </h1>
        <p className="px-5 text-lg text-gray-600 mb-6">
          Fill out the details below including the insured's name, business
          address, class code, and exposure amount. We will use this information
          to prepare your quote.
        </p>
        <div className="flex justify-center">
          <QuoteForm onSubmit={handleQuoteSubmit} />
        </div>
      </div>
    </div>
  );
}
