import { Button } from "@/components/ui/button";
import useQuoteHistory from "@/hooks/useQuoteHistory";
import DataTable from "@/widget/DataTable";
import Loader from "@/widget/Loader";
import { RefreshCcw } from "lucide-react";

const tableHeaders = [
  "Insured Name",
  "Company's Address",
  "Class Code",
  "Exposure Amount",
  "Calculate Premium",
];

export default function QuoteHistory() {
  const { data: quoteHistoryData, isLoading } = useQuoteHistory();

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-full h-full text-center">
        <h1 className="text-3xl font-bold mb-[10px]">
          Quote History{" "}
          <Button>
            <RefreshCcw />
          </Button>
        </h1>
        {isLoading && <Loader loadingMessage="Fetching Data..." />}
        {!isLoading && (
          <div className="py-[30px]">
            <DataTable
              tableHeaders={tableHeaders}
              quoteData={quoteHistoryData}
            />
          </div>
        )}
      </div>
    </div>
  );
}
