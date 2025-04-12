
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileDown, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const uploadHistory = [
  {
    id: 1,
    fileName: "销售数据_2025Q1.xlsx",
    uploadDate: "2025-04-12 09:30:45",
    status: "成功",
    records: 156,
    size: "2.3 MB"
  },
  {
    id: 2,
    fileName: "采购数据_2025Q1.xlsx",
    uploadDate: "2025-04-10 14:20:30",
    status: "成功",
    records: 98,
    size: "1.7 MB"
  },
  {
    id: 3,
    fileName: "费用报销_2025Q1.xlsx",
    uploadDate: "2025-04-08 11:15:22",
    status: "成功",
    records: 45,
    size: "0.9 MB"
  },
  {
    id: 4,
    fileName: "银行流水_2025Q1.xlsx",
    uploadDate: "2025-04-05 16:40:15",
    status: "部分成功",
    records: 210,
    size: "3.1 MB"
  },
  {
    id: 5,
    fileName: "发票数据_2025Q1.xlsx",
    uploadDate: "2025-04-03 10:05:50",
    status: "失败",
    records: 0,
    size: "1.5 MB"
  }
];

const UploadHistory = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium">上传历史</h2>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-medium">文件名</TableHead>
              <TableHead className="font-medium">上传时间</TableHead>
              <TableHead className="font-medium">状态</TableHead>
              <TableHead className="font-medium">记录数</TableHead>
              <TableHead className="font-medium">文件大小</TableHead>
              <TableHead className="font-medium text-right">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {uploadHistory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.fileName}</TableCell>
                <TableCell>{item.uploadDate}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${item.status === '成功' ? 'bg-green-100 text-green-700 border-green-200' : 
                        item.status === '部分成功' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                        'bg-red-100 text-red-700 border-red-200'}
                    `}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.records}</TableCell>
                <TableCell>{item.size}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="ghost">
                      <Eye className="h-4 w-4 mr-1" />
                      查看
                    </Button>
                    <Button size="sm" variant="ghost">
                      <FileDown className="h-4 w-4 mr-1" />
                      下载
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UploadHistory;
