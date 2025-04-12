
import UploadSection from "@/components/data-upload/UploadSection";
import UploadHistory from "@/components/data-upload/UploadHistory";
import ProcessSteps from "@/components/verification/ProcessSteps";

const DataImport = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">数据导入</h1>
      </div>
      
      <ProcessSteps />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <UploadSection />
        </div>
        
        <div className="lg:col-span-2">
          <UploadHistory />
        </div>
      </div>
    </div>
  );
};

export default DataImport;
