import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QuoteForm from "@/forms/quoteForm/QuoteForm";
import { getQuote } from "@/hooks/getQuote";
import { useUpdateQuote } from "@/hooks/useUpdateQuote";
import { useUpdateStatus } from "@/hooks/useUpdateStatus";
import ShowInsuranceDetails from "@/widget/ShowInsuranceDetails";
import StatusBadge from "@/widget/StatusBadge";
import UpdatePolicyButton from "@/widget/UpdatePolicyButton";
import { LucideEdit, X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function QuoteDetails() {
  const { id } = useParams();
  const { data: quoteData, isLoading } = getQuote(id);
  const { mutate: updateQuote, isPending } = useUpdateQuote(id);
  const { mutate: updateStatus } = useUpdateStatus(id);
  const [isEditable, setEditable] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (data) => {
    updateQuote({
      nameInsured: data.nameInsured,
      companyAddress: data.companyAddress,
      classCode: data.classCode,
      exposureAmount: data.exposureAmount,
    });
    setEditable(false);
  };

  const handleStatusChange = (newStatus) => {
    updateStatus(newStatus);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-full h-full">
        <div className="container mx-auto py-10">
          <div className="mb-6 flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/app/history")}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold">Go Back To Quote History</h1>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="p-0">
                <CardHeader className="bg-muted/50 py-[10px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Quote Details</CardTitle>
                      <p className="teext-sm text-muted-foreground">
                        Created at {"5/23/2025"}
                      </p>
                    </div>
                    <div className="text-right">
                      {!isEditable && (
                        <Button
                          variant="outline"
                          onClick={() => setEditable(true)}
                        >
                          <LucideEdit className="mr-2 h-4 w-4" />
                          Edit Quote
                        </Button>
                      )}
                      {isEditable && (
                        <Button
                          variant="outline"
                          onClick={() => setEditable(false)}
                        >
                          <X className="mr-2 h-4 w-4" />
                          Cancel Edit
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-6">
                  {!isEditable && !isLoading && (
                    <ShowInsuranceDetails
                      nameInsured={quoteData.nameInsured}
                      companyAddress={quoteData.companyAddress}
                      classCode={quoteData.classCode}
                      exposureAmount={quoteData.exposureAmount}
                      premium={quoteData.premium}
                    />
                  )}

                  {isEditable && (
                    <QuoteForm
                      editMode={true}
                      onSubmit={handleEdit}
                      isLoading={isPending}
                      defaultFormData={{
                        nameInsured: quoteData.nameInsured,
                        companyAddress: quoteData.companyAddress,
                        classCode: quoteData.classCode,
                        exposureAmount: quoteData.exposureAmount.replace(
                          /[^0-9.-]+/g,
                          ""
                        ),
                        premium: quoteData.premium,
                      }}
                    />
                  )}
                </CardContent>
                <CardFooter className="bg-muted/50 flex justify-between py-[10px]">
                  <div className="text-sm font-medium">
                    {/* <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Ready for Binding
                    </div> */}
                    {!isLoading && <StatusBadge status={quoteData.status} />}
                  </div>

                  {!isLoading && (
                    <UpdatePolicyButton
                      isEditable={isEditable}
                      handleStatusChange={handleStatusChange}
                      status={quoteData.status}
                    />
                  )}
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
