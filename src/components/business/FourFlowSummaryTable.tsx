
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface TableData {
  id: string;
  fourFlowCode: string;
  [key: string]: any;
}

interface FourFlowSummaryTableProps {
  title: string;
  data: TableData[];
  columns: Array<{
    header: string;
    accessor: string;
  }>;
}

const FourFlowSummaryTable = ({
  title,
  data,
  columns,
}: FourFlowSummaryTableProps) => {
  const getStatusBadge = (status: string) => {
    const statusStyles = {
      "未核销": "bg-gray-100 text-gray-800 border-gray-200",
      "已核销": "bg-green-100 text-green-800 border-green-200",
      "部分核销": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "异常": "bg-red-100 text-red-800 border-red-200",
    };

    return (
      <Badge
        variant="outline"
        className={statusStyles[status as keyof typeof statusStyles] || ""}
      >
        {status}
      </Badge>
    );
  };

  return (
    <div>
      <h3 className="taxeye-section-title">{title}</h3>
      <div className="overflow-x-auto">
        <Table className="taxeye-table">
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead key={index}>{column.header}</TableHead>
              ))}
              <TableHead>状态</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column, cellIndex) => (
                  <TableCell key={`${row.id}-${cellIndex}`}>
                    {column.accessor === "fourFlowCode" ? (
                      <span className="font-medium">{row[column.accessor]}</span>
                    ) : (
                      row[column.accessor]
                    )}
                  </TableCell>
                ))}
                <TableCell>{getStatusBadge(row.status)}</TableCell>
                <TableCell>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length + 2} className="text-center py-4">
                  暂无数据
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FourFlowSummaryTable;
