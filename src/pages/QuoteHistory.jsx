import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Loader from "@/widget/Loader";
import { RefreshCcw } from "lucide-react";

export default function QuoteHistory() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="h-full w-full text-center">
        <h1 className="text-3xl font-bold mb-[10px]">
          Quote History{" "}
          <Button>
            <RefreshCcw />
          </Button>
        </h1>
        {/* <Loader loadingMessage="Fetching Data..." /> */}
        <div className="space-y-4 py-[20px]">
          <Card className="w-full max-w-2xl mx-auto">
            <CardContent>
              <p>Hello world</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
