
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const verificationData = [
  { name: '已核销', value: 5 },
  { name: '部分核销', value: 2 },
  { name: '未核销', value: 2 },
  { name: '异常', value: 3 },
];

const businessTypeData = [
  { name: '销售', value: 4 },
  { name: '采购', value: 3 },
  { name: '费用', value: 5 },
];

const riskBreakdownData = [
  { name: '高风险', value: 1, color: '#e53935' },
  { name: '中风险', value: 2, color: '#ffb74d' },
  { name: '低风险', value: 2, color: '#ffeb3b' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SummaryCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-base font-medium mb-4">核销状态分布</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={verificationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" name="交易数量" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-base font-medium mb-4">风险等级分布</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={riskBreakdownData}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {riskBreakdownData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SummaryCharts;
