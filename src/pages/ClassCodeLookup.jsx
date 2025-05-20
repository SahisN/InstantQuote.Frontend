import { Input } from "@/components/ui/input";
import DataTable from "@/widget/DataTable";

const tableHeaders = [
  "General Liability Code",
  "General Liability Description",
];

const data = [
  {
    "General Liability Code": "10010",
    "General Liability Description":
      "Air Conditioning Equipment--Dealers or Distributors Only",
  },
  {
    "General Liability Code": "10015",
    "General Liability Description": "Amusement Centers",
  },
  {
    "General Liability Code": "10020",
    "General Liability Description": "Amusement Parks",
  },
  {
    "General Liability Code": "10026",
    "General Liability Description": "Antique Stores",
  },
  {
    "General Liability Code": "10036",
    "General Liability Description":
      "Anhydrous Ammonia Dealers and Distributors",
  },
  {
    "General Liability Code": "10040",
    "General Liability Description": "Appliance Distributors--Household Type",
  },
  {
    "General Liability Code": "10042",
    "General Liability Description": "Appliance Stores--Household Type",
  },
  {
    "General Liability Code": "10052",
    "General Liability Description": "Archery Ranges--Indoor",
  },
  {
    "General Liability Code": "10054",
    "General Liability Description": "Archery Ranges--Other Than Indoor",
  },
  {
    "General Liability Code": "10060",
    "General Liability Description": "Army and Navy Stores",
  },
  {
    "General Liability Code": "10065",
    "General Liability Description": "Art Galleries--Other Than Not-For-Profit",
  },
];

export default function ClassCodeLookup() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-full h-full text-center">
        <h1 className="text-3xl font-bold mt-[15px] mb-[10px]">
          General Liability Code Lookup
        </h1>
        <Input />
        <div className="py-[30px]">
          <DataTable tableHeaders={tableHeaders} quoteData={data} />
        </div>
      </div>
    </div>
  );
}
