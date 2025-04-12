
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play } from "lucide-react";
import FourFlowTable from "@/components/verification/FourFlowTable";
import ProcessSteps from "@/components/verification/ProcessSteps";
import { salesOrders, invoices, payments, shipments } from "@/data/mockData";

const Verification = () => {
  const [isAutoVerifying, setIsAutoVerifying] = useState(false);
  
  const startAutoVerification = () => {
    setIsAutoVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      setIsAutoVerifying(false);
    }, 2000);
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">四流一致性核销</h1>
        
        <Button 
          onClick={startAutoVerification}
          disabled={isAutoVerifying}
        >
          <Play className="h-4 w-4 mr-2" />
          {isAutoVerifying ? "核销中..." : "开始自动核销"}
        </Button>
      </div>
      
      <ProcessSteps />
      
      <Tabs defaultValue="sales" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="sales">销售流程</TabsTrigger>
          <TabsTrigger value="purchase">采购流程</TabsTrigger>
          <TabsTrigger value="expense">费用报销</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sales" className="space-y-6">
          <FourFlowTable 
            title="销售订单" 
            data={salesOrders}
            columns={[
              { header: "四流核销码", accessor: "fourFlowCode" },
              { header: "订单号", accessor: "orderNumber" },
              { header: "客户名称", accessor: "customerName" },
              { header: "订单日期", accessor: "orderDate" },
              { header: "金额", accessor: "orderTotal" }
            ]}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FourFlowTable 
              title="发票" 
              data={invoices}
              columns={[
                { header: "四流核销码", accessor: "fourFlowCode" },
                { header: "发票号", accessor: "invoiceNumber" },
                { header: "发票日期", accessor: "invoiceDate" },
                { header: "金额", accessor: "invoiceTotal" }
              ]}
            />
            
            <FourFlowTable 
              title="收款" 
              data={payments}
              columns={[
                { header: "四流核销码", accessor: "fourFlowCode" },
                { header: "交易编号", accessor: "bankTransactionId" },
                { header: "支付日期", accessor: "paymentDate" },
                { header: "金额", accessor: "amount" }
              ]}
            />
          </div>
          
          <FourFlowTable 
            title="发货" 
            data={shipments}
            columns={[
              { header: "四流核销码", accessor: "fourFlowCode" },
              { header: "发货单号", accessor: "shipmentNumber" },
              { header: "发货日期", accessor: "shipmentDate" },
              { header: "状态", accessor: "shipmentStatus" }
            ]}
          />
        </TabsContent>
        
        <TabsContent value="purchase">
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h3 className="text-lg font-medium mb-2">采购流程数据准备中</h3>
            <p className="text-gray-500">
              该功能模块数据还在准备中，您可以先浏览销售流程模块
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="expense">
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h3 className="text-lg font-medium mb-2">费用报销数据准备中</h3>
            <p className="text-gray-500">
              该功能模块数据还在准备中，您可以先浏览销售流程模块
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Verification;
