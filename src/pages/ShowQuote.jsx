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
import { Separator } from "@radix-ui/react-separator";

export default function ShowQuote({}) {
  const navigate = useNavigate();
  const location = useLocation();

  const { nameInsured, companyAddress, classCode, exposureAmount, quote } =
    location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate("/app/dashboard");
    }
  }, []);

  const codeDescription = (code) => {
    const item = data.find((obj) => obj.code === code);
    return item ? item.description : "No Description";
  };
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
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/** Show Insured Information */}
              <div>
                <h3 className="mb-2 font-semibold text-lg">
                  Insured Information
                </h3>
                <div className="grid gap-1">
                  {/** Show Insured Name*/}
                  <div className="grid grid-cols-3">
                    <span className="text-md text-muted-foreground">
                      Name Insured:
                    </span>
                    <span className="col-span-2">{nameInsured}</span>
                  </div>
                  {/**Show Business Address */}
                  <div className="grid grid-cols-3">
                    <span className="text-md text-muted-foreground">
                      Business Address:
                    </span>
                    <span className="col-span-2">{companyAddress}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/** Show Coverage Information */}
              <div>
                <h3 className="mb-2 font-semibold text-lg">
                  Coverage Information
                </h3>
                <div className="grid gap-1">
                  {/** Show Class Code*/}
                  <div className="grid grid-cols-3">
                    <span className="text-md text-muted-foreground">
                      Class Code:
                    </span>
                    <span className="col-span-2">
                      {classCode} - {codeDescription(classCode)}
                    </span>
                  </div>
                  {/**Show Exposure Amount */}
                  <div className="grid grid-cols-3">
                    <span className="text-md text-muted-foreground">
                      Exposure Amount:
                    </span>
                    <span className="col-span-2">${exposureAmount}</span>
                  </div>
                </div>
              </div>

              <Separator />
              {/** Show Premium Calculation */}
              <div>
                <h3 className="mb-2 font-semibold text-lg">
                  Premiun Calculation
                </h3>
                <div className="grid gap-1">
                  {/** Show */}
                  <div className="grid grid-cols-3">
                    <span className="text-md text-muted-foreground">
                      Calculated Premium:
                    </span>
                    <span className="col-span-2">${quote}</span>
                  </div>
                </div>
              </div>
            </div>
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
