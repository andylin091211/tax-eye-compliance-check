
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
import { Search, FileCheck, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FourFlowItem, VerificationStatus } from "@/types";

interface FourFlowTableProps {
  title: string;
  data: FourFlowItem[];
  columns: {
    header: string;
    accessor: string;
  }[];
}

const statusColors: Record<VerificationStatus, string> = {
  "未核销": "bg-gray-100 text-gray-800 border-gray-200",
  "已核销": "bg-green-100 text-green-800 border-green-200",
  "部分核销": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "异常": "bg-red-100 text-red-800 border-red-200",
};

const FourFlowTable = ({ title, data, columns }: FourFlowTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  
  const filteredData = data.filter(item => {
    const matchesSearch = Object.values(item).some(
      value => value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const matchesStatus = !statusFilter || item.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
      
      <div className="p-4">
        <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="搜索..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={value => setStatusFilter(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="核销状态" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">全部状态</SelectItem>
                <SelectItem value="未核销">未核销</SelectItem>
                <SelectItem value="已核销">已核销</SelectItem>
                <SelectItem value="部分核销">部分核销</SelectItem>
                <SelectItem value="异常">异常</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="default" size="icon">
              <FileCheck className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                {columns.map((column, i) => (
                  <TableHead key={i} className="font-medium">
                    {column.header}
                  </TableHead>
                ))}
                <TableHead className="font-medium">核销状态</TableHead>
                <TableHead className="font-medium">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((item: any) => (
                  <TableRow key={item.id}>
                    {columns.map((column, i) => (
                      <TableCell key={i}>
                        {column.accessor === 'fourFlowCode' ? (
                          <div className="font-medium">{item[column.accessor]}</div>
                        ) : (
                          item[column.accessor]
                        )}
                      </TableCell>
                    ))}
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={statusColors[item.status as VerificationStatus]}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          查看详情
                        </Button>
                        <Button 
                          size="sm" 
                          variant={item.status === "异常" ? "destructive" : "default"}
                        >
                          {item.status === "异常" ? (
                            <>
                              <AlertTriangle className="h-4 w-4 mr-1" />
                              处理异常
                            </>
                          ) : (
                            <>
                              <FileCheck className="h-4 w-4 mr-1" />
                              手动核销
                            </>
                          )}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length + 2} className="h-32 text-center">
                    没有匹配的记录
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default FourFlowTable;
