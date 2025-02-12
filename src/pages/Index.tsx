
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ArrowUpIcon, TrendingUpIcon, Users, Globe2, Coins } from "lucide-react";

const metrics = [
  {
    label: "Total Contributors",
    value: "847",
    change: "+12%",
    icon: Users,
  },
  {
    label: "Active Today",
    value: "126",
    change: "+24%",
    icon: TrendingUpIcon,
  },
  {
    label: "Languages",
    value: "23",
    change: "+3",
    icon: Globe2,
  },
  {
    label: "Total Paid Out",
    value: "$12,467",
    change: "+842",
    icon: Coins,
  },
];

const languageData = [
  { name: "Swahili", submissions: 2341 },
  { name: "Bengali", submissions: 1876 },
  { name: "Yoruba", submissions: 1654 },
  { name: "Kurdish", submissions: 1432 },
  { name: "Telugu", submissions: 1287 },
];

const qualityData = [
  { name: "Excellent", value: 34, color: "#22C55E" },
  { name: "Good", value: 42, color: "#EAB308" },
  { name: "Needs Review", value: 24, color: "#F97316" },
];

const MetricCard = ({ metric }: { metric: typeof metrics[0] }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-600">{metric.label}</p>
        <h3 className="text-2xl font-bold mt-2">{metric.value}</h3>
        <div className="flex items-center mt-2 text-success">
          <ArrowUpIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">{metric.change}</span>
        </div>
      </div>
      <metric.icon className="w-8 h-8 text-gray-400" />
    </div>
  </Card>
);

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Language Distribution */}
          <Card className="col-span-3 p-6">
            <h3 className="text-lg font-semibold mb-4">Language Distribution</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={languageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="submissions" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Quality Metrics */}
          <Card className="col-span-2 p-6">
            <h3 className="text-lg font-semibold mb-4">Quality Metrics</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={qualityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {qualityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center space-x-4 mt-4">
                {qualityData.map((item) => (
                  <div key={item.name} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">
                      {item.name} ({item.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
