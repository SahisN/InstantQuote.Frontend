import Loader from "@/widget/Loader";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import getQuoteHistory from "@/hooks/getQuoteHistory";
import StatusBadge from "@/widget/StatusBadge";

export default function QuoteHistory() {
  const { data: quoteHistoryData, isLoading } = getQuoteHistory();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-full h-full text-center">
        <h1 className="text-3xl font-bold mb-[10px]">Your Quote History </h1>
        {isLoading && <Loader loadingMessage="Fetching Data..." />}
        {!isLoading && (
          <div className="container mx-auto py-10">
            <Card>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Name Insured</TableHead>
                      <TableHead>Company Address</TableHead>
                      <TableHead>Class Code</TableHead>
                      <TableHead>Exposure Amount</TableHead>
                      <TableHead>Premium</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quoteHistoryData.map((quoteData, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-left">
                          {quoteData.lastUpdated}
                        </TableCell>
                        <TableCell className="text-left">
                          {quoteData.nameInsured}
                        </TableCell>
                        <TableCell className="text-left">
                          {quoteData.companyAddress}
                        </TableCell>
                        <TableCell className="text-left">
                          {quoteData.classCode}
                        </TableCell>
                        <TableCell className="text-left">
                          {quoteData.exposureAmount}
                        </TableCell>
                        <TableCell className="text-left">
                          {quoteData.premium}
                        </TableCell>
                        <TableCell className="text-left">
                          <StatusBadge status={quoteData.status} />
                        </TableCell>
                        <TableCell className="text-left">
                          <Button
                            onClick={() =>
                              navigate(`/app/quote-details/${quoteData._id}`)
                            }
                          >
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
