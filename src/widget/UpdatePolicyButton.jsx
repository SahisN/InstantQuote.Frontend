import { Button } from "@/components/ui/button";
import { ArrowRightCircle, CheckCircle, FileText, XCircle } from "lucide-react";

export default function UpdatePolicyButton({
  status,
  isEditable,
  handleStatusChange,
}) {
  // gets the correct button for the status
  const getPolicyButton = (status) => {
    switch (status) {
      case "Bind":
        return (
          <Button
            disabled={isEditable}
            onClick={() => handleStatusChange("Issued")}
          >
            <FileText className="mr-2 h-4 w-4" />
            Issue Policy
          </Button>
        );

      case "Issued":
        return (
          <Button
            disabled={isEditable}
            onClick={() => handleStatusChange("Cancelled")}
            variant="destructive"
          >
            <XCircle className="mr-2 h-4 w-4" />
            Cancel Policy
          </Button>
        );

      case "Cancelled":
        return (
          <Button
            disabled={isEditable}
            onClick={() => handleStatusChange("Issued")}
          >
            <ArrowRightCircle className="mr-2 h-4 w-4" />
            Reinstate Policy
          </Button>
        );

      default:
        // Treat "Quote" and any unknown status the same
        return (
          <Button
            disabled={isEditable}
            onClick={() => handleStatusChange("Bind")}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Bind Policy
          </Button>
        );
    }
  };
  {
    /** Returns apprioriate button for the quote status*/
  }
  return getPolicyButton(status);
}
