import QuoteForm from "@/forms/quoteForm/QuoteForm";
import { useQuote } from "@/hooks/useQuote";

export default function Dashboard() {
  const { mutate: quote } = useQuote();

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
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-[10px] text-center">
          Get Your Insurance Quote
        </h1>
        <p className="px-[20px] text-xl text-center">
          Fill out the details below including the insured's name, business
          address, class code, and exposure amout. We will use this information
          to prepare your quote
        </p>
      </div>
      <div>
        <QuoteForm onSubmit={handleQuoteSubmit} />
      </div>
    </div>
  );
}
