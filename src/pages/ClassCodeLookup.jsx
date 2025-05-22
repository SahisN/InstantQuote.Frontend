import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DataTable from "@/widget/DataTable";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import data from "@/static/gl_code";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

    const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(search.toLowerCase())
      )
    );

    setTableData(filteredData);
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-full h-full">
        <h1 className="text-3xl font-bold mb-[10px]">
          General Liability Code Lookup
        </h1>
        <p className="text-muted-foreground">
          Find the appropriate class code for your business operations
        </p>
        <Card className="mt-[20px]">
          <CardHeader>
            <CardTitle>Search Class Codes</CardTitle>
            <CardDescription>
              Enter a keyword related to the business operation or industry to
              find the appropriate class code.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex w-full max-w-xl spcae-x-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevents page reload
                  filterData();
                }}
                className="flex w-full max-w-xl space-x-2"
              >
                <Input
                  placeholder="Search by code or description"
                  onChange={(event) => setSearch(event.target.value)}
                />
                <Button
                  type="submit"
                  className="ml-[20px]"
                  onClick={filterData}
                >
                  Search <SearchIcon />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
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
