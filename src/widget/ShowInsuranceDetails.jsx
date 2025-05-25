import classCodes from "@/static/gl_code";
import { Separator } from "@radix-ui/react-separator";

export default function ShowInsuranceDetails({
  nameInsured,
  companyAddress,
  classCode,
  exposureAmount,
  premium,
}) {
  // takes in class code and returns the correct description for the code
  const codeDescription = (code) => {
    const item = classCodes.find((obj) => obj.code === code);
    return item ? item.description : "No Description";
  };
  return (
    <div className="space-y-6">
      {/** Show Insured Information */}
      <div>
        <h3 className="mb-2 font-semibold text-lg">Insured Information</h3>
        <div className="grid gap-1">
          {/** Show Insured Name*/}
          <div className="grid grid-cols-3">
            <span className="text-md text-muted-foreground">Name Insured:</span>
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
        <h3 className="mb-2 font-semibold text-lg">Coverage Information</h3>
        <div className="grid gap-1">
          {/** Show Class Code*/}
          <div className="grid grid-cols-3">
            <span className="text-md text-muted-foreground">Class Code:</span>
            <span className="col-span-2">
              {classCode} - {codeDescription(classCode)}
            </span>
          </div>
          {/**Show Exposure Amount */}
          <div className="grid grid-cols-3">
            <span className="text-md text-muted-foreground">
              Exposure Amount:
            </span>
            <span className="col-span-2">{exposureAmount}</span>
          </div>
        </div>
      </div>

      <Separator />
      {/** Show Premium Calculation */}
      <div>
        <h3 className="mb-2 font-semibold text-lg">Premiun Calculation</h3>
        <div className="grid gap-1">
          {/** Show */}
          <div className="grid grid-cols-3">
            <span className="text-md text-muted-foreground">
              Calculated Premium:
            </span>
            <span className="col-span-2">{premium}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
