import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", pv: 2400, uv: 4000, wv: 1000 },
  { name: "Feb", pv: 1398, uv: 3000, wv: 1200 },
  { name: "Mar", pv: 9800, uv: 2000, wv: 1500 },
  { name: "Apr", pv: 3908, uv: 2780, wv: 1800 },
  { name: "May", pv: 4800, uv: 1890, wv: 2000 },
  { name: "Jun", pv: 3800, uv: 2390, wv: 2200 },
  { name: "Jul", pv: 4300, uv: 3490, wv: 2400 },
  { name: "Aug", pv: 2400, uv: 4000, wv: 1000 },
  { name: "Sep", pv: 1398, uv: 3000, wv: 1200 },
  { name: "Oct", pv: 9800, uv: 2000, wv: 1500 },
  { name: "Nov", pv: 3908, uv: 2780, wv: 1800 },
  { name: "Dec", pv: 4800, uv: 1890, wv: 2000 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="wv" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
