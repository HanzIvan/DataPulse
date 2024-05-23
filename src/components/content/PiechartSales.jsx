// import piechart

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "CPUs", sales: 80000 },
  { name: "GPUs", sales: 100000 },
  { name: "Motherboards", sales: 60000 },
  { name: "RAM", sales: 40000 },
  { name: "Storage (SSDs/HDDs)", sales: 50000 },
  { name: "Power Supplies", sales: 30000 },
  { name: "Cases", sales: 20000 },
  { name: "Cooling Systems", sales: 15000 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28FFF",
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={14}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PiechartSales = () => {
  return (
    <div className="lg:w-[20%] h-[100%] mt-4 lg:ml-4 bg-white rounded-lg shadow-md p-3">
      <h1 className="mt-3 pl-3 font-regular text-xl">Sales Distribution</h1>
      <div className="mt-10 flex-1 w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="sales"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PiechartSales;
