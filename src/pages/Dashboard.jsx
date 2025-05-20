import QuoteForm from "@/forms/quoteForm/QuoteForm";
import Layout from "./Layout";

export default function Dashboard() {
  const handleQuoteSubmit = (data) => {
    console.log("Quote data:", data);
    // Perform quote submission logic here
    // For example, you can send the data to an API endpoint
  };
  return (
    <div>
      <QuoteForm onSubmit={handleQuoteSubmit} />
    </div>
  );
}
