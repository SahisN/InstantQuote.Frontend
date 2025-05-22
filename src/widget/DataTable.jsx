import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DataTable({ tableHeaders, quoteData }) {
  return (
    <Table className="table-fixed w-full">
      <TableHeader>
        <TableRow>
          {tableHeaders.map((title, index) => (
            <TableHead key={index} className="text-left">
              {title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {quoteData.map((item, index) => (
          <TableRow key={index}>
            {Object.values(item).map((value, index) => (
              <TableCell key={index} className="text-left">
                {value}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
