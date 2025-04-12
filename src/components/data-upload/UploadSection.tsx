
import { useState } from "react";
import { Upload, FileSpreadsheet, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

enum UploadStatus {
  IDLE,
  UPLOADING,
  SUCCESS,
  ERROR
}

const UploadSection = () => {
  const [status, setStatus] = useState<UploadStatus>(UploadStatus.IDLE);
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  
  const simulateUpload = () => {
    if (!selectedFile) return;
    
    setStatus(UploadStatus.UPLOADING);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setStatus(UploadStatus.SUCCESS);
          toast.success("数据上传成功！", {
            description: "系统已开始处理您的数据。"
          });
          return 100;
        }
        
        return newProgress;
      });
    }, 300);
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium mb-4">数据上传</h2>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
          {status === UploadStatus.SUCCESS ? (
            <Check className="h-8 w-8 text-green-500" />
          ) : status === UploadStatus.ERROR ? (
            <AlertCircle className="h-8 w-8 text-red-500" />
          ) : (
            <Upload className="h-8 w-8 text-blue-500" />
          )}
        </div>
        
        {status !== UploadStatus.SUCCESS ? (
          <>
            <h3 className="text-lg font-medium mb-2">
              {status === UploadStatus.ERROR ? "上传失败" : "点击或拖拽文件上传"}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              支持 Excel 格式文件 (.xlsx, .xls)
            </p>
            
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".xlsx,.xls"
              onChange={handleFileSelect}
              disabled={status === UploadStatus.UPLOADING}
            />
            
            <label htmlFor="file-upload">
              <Button
                variant="outline"
                className="mb-2"
                asChild
                disabled={status === UploadStatus.UPLOADING}
              >
                <span>选择文件</span>
              </Button>
            </label>
            
            {selectedFile && (
              <div className="flex items-center text-sm text-gray-700 mt-2">
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                <span>{selectedFile.name}</span>
              </div>
            )}
            
            {selectedFile && status === UploadStatus.IDLE && (
              <Button 
                className="mt-4" 
                onClick={simulateUpload}
              >
                开始上传
              </Button>
            )}
          </>
        ) : (
          <>
            <h3 className="text-lg font-medium mb-2">上传完成</h3>
            <p className="text-sm text-gray-500 mb-4">
              您的数据已成功上传，系统正在进行处理
            </p>
            <Button 
              onClick={() => {
                setStatus(UploadStatus.IDLE);
                setSelectedFile(null);
                setProgress(0);
              }}
            >
              上传新文件
            </Button>
          </>
        )}
        
        {status === UploadStatus.UPLOADING && (
          <div className="w-full mt-4">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-gray-500 mt-2">上传中...{progress}%</p>
          </div>
        )}
      </div>
      
      <div className="mt-6">
        <h3 className="text-md font-medium mb-3">上传说明</h3>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
          <li>请使用提供的模板文件进行数据填写</li>
          <li>确保所有必填字段都已填写完成</li>
          <li>数据格式应符合系统要求，以保证正确导入</li>
          <li>上传文件大小不超过10MB</li>
        </ul>
        
        <Button variant="outline" className="mt-4">
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          下载数据模板
        </Button>
      </div>
    </div>
  );
};

export default UploadSection;
