
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet } from "lucide-react";
import FourFlowSummaryTable from "@/components/business/FourFlowSummaryTable";
import { salesOrders, invoices, payments, shipments } from "@/data/mockData";

const Sales = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">销售流程管理</h1>
        
        <div>
          <Button variant="outline" className="mr-2">
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            导出数据
          </Button>
          <Button>
            新增销售订单
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">销售流程</h2>
        
        <div className="overflow-x-auto">
          <FourFlowSummaryTable
            title="销售流程"
            data={salesOrders}
            columns={[
              { header: "四流核销码", accessor: "fourFlowCode" },
              { header: "订单", accessor: "orderNumber" },
              { header: "发票", accessor: "invoiceTotal" },
              { header: "资金流", accessor: "amount" },
              { header: "物流发货/服务交付", accessor: "verifiedAmount" },
              { header: "四流差异原因", accessor: "differenceReason" },
            ]}
          />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <Tabs defaultValue="orders">
          <TabsList className="mb-4">
            <TabsTrigger value="orders">销售订单</TabsTrigger>
            <TabsTrigger value="invoices">销售发票</TabsTrigger>
            <TabsTrigger value="receipts">销售收款</TabsTrigger>
            <TabsTrigger value="deliveries">发货管理</TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders">
            <FourFlowSummaryTable
              title="销售订单明细"
              data={salesOrders}
              columns={[
                { header: "四流核销码", accessor: "fourFlowCode" },
                { header: "订单号", accessor: "orderNumber" },
                { header: "客户名称", accessor: "customerName" },
                { header: "订单日期", accessor: "orderDate" },
                { header: "金额", accessor: "orderTotal" },
                { header: "订单状态", accessor: "orderStatus" }
              ]}
            />
          </TabsContent>
          
          <TabsContent value="invoices">
            <FourFlowSummaryTable
              title="销售发票明细"
              data={invoices}
              columns={[
                { header: "四流核销码", accessor: "fourFlowCode" },
                { header: "发票号", accessor: "invoiceNumber" },
                { header: "发票日期", accessor: "invoiceDate" },
                { header: "发票金额", accessor: "invoiceTotal" },
                { header: "发票类型", accessor: "invoiceType" }
              ]}
            />
          </TabsContent>
          
          <TabsContent value="receipts">
            <FourFlowSummaryTable
              title="销售收款明细"
              data={payments}
              columns={[
                { header: "四流核销码", accessor: "fourFlowCode" },
                { header: "交易编号", accessor: "bankTransactionId" },
                { header: "收款日期", accessor: "paymentDate" },
                { header: "收款方式", accessor: "paymentMethod" },
                { header: "收款金额", accessor: "amount" }
              ]}
            />
          </TabsContent>
          
          <TabsContent value="deliveries">
            <FourFlowSummaryTable
              title="发货管理明细"
              data={shipments}
              columns={[
                { header: "四流核销码", accessor: "fourFlowCode" },
                { header: "发货单号", accessor: "shipmentNumber" },
                { header: "发货日期", accessor: "shipmentDate" },
                { header: "发货类型", accessor: "shipmentType" },
                { header: "发货状态", accessor: "shipmentStatus" }
              ]}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Sales;
