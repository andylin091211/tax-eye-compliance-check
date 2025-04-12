
import { BarChart3, AlertTriangle, DollarSign, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/dashboard/StatCard";
import RiskTable from "@/components/dashboard/RiskTable";
import SummaryCharts from "@/components/dashboard/SummaryCharts";
import { dataSummary, riskItems } from "@/data/mockData";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">财税风险仪表板</h1>
        <div>
          <Button variant="outline" className="mr-2">
            导出报告
          </Button>
          <Button>
            刷新数据
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="总交易数"
          value={dataSummary.totalTransactions}
          icon={<BarChart3 className="h-6 w-6 text-taxeye-primary" />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="已核销交易"
          value={dataSummary.verifiedTransactions}
          icon={<FileCheck className="h-6 w-6 text-green-600" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="异常交易"
          value={dataSummary.abnormalTransactions}
          icon={<AlertTriangle className="h-6 w-6 text-red-500" />}
          trend={{ value: 2, isPositive: false }}
          valueClassName="text-red-500"
        />
        <StatCard
          title="风险项目"
          value={dataSummary.totalRisks}
          icon={<DollarSign className="h-6 w-6 text-amber-500" />}
          trend={{ value: 3, isPositive: false }}
          valueClassName="text-amber-500"
        />
      </div>
      
      <SummaryCharts />
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">风险项目一览</h2>
          <Button variant="outline" size="sm">
            查看全部风险
          </Button>
        </div>
        
        <RiskTable risks={riskItems} />
      </div>
    </div>
  );
};

export default Dashboard;
