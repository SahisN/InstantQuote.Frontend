import { Button } from "@/components/ui/button";
import { HistoryIcon, LucideArrowBigLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import data from "@/static/gl_code";
import { useLocation } from "react-router-dom";

export default function ShowQuote({}) {
  const navigate = useNavigate();
  const location = useLocation();

  const { nameInsured, companyAddress, classCode, exposureAmount, quote } =
    location.state || {};

  console.log(nameInsured, companyAddress, classCode, exposureAmount);

  const codeDescription = (code) => {
    const item = data.find((obj) => obj.code === code);
    return item ? item.description : "No Description";
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-full max-wl h-full text-center py-[50px]">
        <div className="text-3xl font-bold mb-[10px]">Calculate Quote</div>
        <div className="text-center">
          <p className="text-xl mb-2 text-gray-700 py-[20px]">
            Thank you for submitting your information. Below is a summary of
            your quote details:
          </p>
          {/* Replace the following with dynamic data as needed */}
          <div className="flex justify-center mr-30">
            <ul className="text-left text-gray-600 mb-4 text-lg space-y-[20px]">
              <li>
                <strong>Insured Name: </strong> {nameInsured}
              </li>
              <li>
                <strong>Comapny Address: </strong> {companyAddress}
              </li>
              <li>
                <strong>ClassCode: </strong>{" "}
                {classCode + ", " + codeDescription(classCode)}
              </li>
              <li>
                <strong>Exposure Amount: </strong> {exposureAmount}
              </li>
              <li>
                <strong>Estimated Monthly Premium:</strong> ${quote}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-8 py-[30px]">
          <Button className="w-[120px]" onClick={() => navigate("/")}>
            Go Back <LucideArrowBigLeft />
          </Button>
          <Button className="w-[140px]" onClick={() => navigate("/history")}>
            View History <HistoryIcon />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
