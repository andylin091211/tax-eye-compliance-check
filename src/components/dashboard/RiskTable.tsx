
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { RiskItem } from "@/types";

interface RiskTableProps {
  risks: RiskItem[];
}

const RiskTable = ({ risks }: RiskTableProps) => {
  const getRiskBadge = (level: "高" | "中" | "低") => {
    const variants: Record<string, string> = {
      "高": "bg-red-500",
      "中": "bg-orange-400",
      "低": "bg-yellow-400"
    };
    
    return (
      <Badge className={`${variants[level]} text-white`}>
        {level}风险
      </Badge>
    );
  };
  
  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      "未处理": "bg-gray-500 text-white",
      "处理中": "bg-blue-500 text-white",
      "已解决": "bg-green-500 text-white",
      "已关闭": "bg-gray-400 text-white"
    };
    
    return (
      <Badge className={variants[status] || "bg-gray-500"}>
        {status}
      </Badge>
    );
  };
  
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-taxeye-primary text-white">
            <TableHead className="text-white font-medium">风险等级</TableHead>
            <TableHead className="text-white font-medium">类型</TableHead>
            <TableHead className="text-white font-medium">四流核销码</TableHead>
            <TableHead className="text-white font-medium">描述</TableHead>
            <TableHead className="text-white font-medium">状态</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {risks.map((risk) => (
            <TableRow key={risk.id}>
              <TableCell>{getRiskBadge(risk.riskLevel)}</TableCell>
              <TableCell className="font-medium">{risk.riskType}</TableCell>
              <TableCell>{risk.fourFlowCode}</TableCell>
              <TableCell className="max-w-xs truncate">{risk.description}</TableCell>
              <TableCell>{getStatusBadge(risk.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RiskTable;
