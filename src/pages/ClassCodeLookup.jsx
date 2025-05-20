import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DataTable from "@/widget/DataTable";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import data from "@/static/gl_code";

const tableHeaders = [
  "General Liability Code",
  "General Liability Description",
];

export default function ClassCodeLookup() {
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState(data);
  const filterData = () => {
    if (search == "") {
      setTableData(data);
      return;
    }

    console.log("hello");

    const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(search.toLowerCase())
      )
    );

    console.log(filteredData);

    setTableData(filteredData);
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-full h-full text-center">
        <h1 className="text-3xl font-bold py-[10px] mb-[10px]">
          General Liability Code Lookup
        </h1>
        <div className="flex justify-between gap-x-6">
          <Input
            placeholder="Search by code or description"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button className="px-[50px]" onClick={filterData}>
            Search <SearchIcon />
          </Button>
        </div>
        {tableData.length > 0 ? (
          <div className="py-[30px]">
            <DataTable tableHeaders={tableHeaders} quoteData={tableData} />
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <h1 className="text-2xl font-bold">No data found</h1>
          </div>
        )}
      </div>
    </div>
  );
}
