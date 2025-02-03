import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ChartData = [
  { country: "USA", score: 90 },
  { country: "Germany", score: 85 },
  { country: "Australia", score: 58 },
  { country: "Canada", score: 92 },
];

const SimpleBarChart = () => {
  return (
    <BarChart
      width={600}
      height={400}
      data={ChartData}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="country" />
      <YAxis dataKey="score" />
      <Tooltip />
      <Legend />
      <Bar dataKey="score" fill="#8884d8" barSize={30} />
    </BarChart>
  );
};

export default SimpleBarChart;
