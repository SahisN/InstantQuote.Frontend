import { Button } from "@/components/ui/button";
import { HistoryIcon, LucideArrowBigLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import data from "@/static/gl_code";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import ShowInsuranceDetails from "@/widget/ShowInsuranceDetails";

export default function ShowQuote({}) {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    createdAt,
    nameInsured,
    companyAddress,
    classCode,
    exposureAmount,
    premium,
  } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate("/app/dashboard");
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-full max-w-3xl h-full">
        <Card className="border-green-200 p-0">
          <CardHeader className="bg-green-50 py-[15px]">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-green-100">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <CardTitle className="text-xl font-bold">
                Quote Generated Successfully
              </CardTitle>
            </div>
            <CardDescription className="text-lg">
              Based on the information provided, we've calculated your insurance
              premium.
            </CardDescription>
            <p className="mt-1 text-xs text-muted-foreground">
              Generated on: {createdAt}
            </p>
          </CardHeader>
          <CardContent className="pt-6">
            {/** Takes insurance information and display them in the card */}
            <ShowInsuranceDetails
              nameInsured={nameInsured}
              classCode={classCode}
              companyAddress={companyAddress}
              exposureAmount={exposureAmount}
              premium={premium}
            />
          </CardContent>
          <CardFooter className="flex justify-between py-[15px]">
            <Button
              className="w-[170px]"
              onClick={() => navigate("/app/dashboard")}
            >
              Get Another Quote <LucideArrowBigLeft />
            </Button>
            <Button
              className="w-[170px]"
              onClick={() => navigate("/app/history")}
            >
              View Quote History <HistoryIcon />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
