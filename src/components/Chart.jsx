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
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    wv: 1000,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    wv: 1200,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    wv: 1500,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    wv: 1800,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    wv: 2000,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    wv: 2200,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    wv: 2400,
  },
  {
    name: "Aug",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    wv: 1000,
  },
  {
    name: "Sep",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    wv: 1200,
  },
  {
    name: "Oct",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    wv: 1500,
  },
  {
    name: "Nov",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    wv: 1800,
  },
  {
    name: "Dec",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    wv: 2000,
  },
];

const Example = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
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
        <Line type="monotone" dataKey="wv" stroke="#ff7300" />{" "}
        {/* Change thirdVar to wv */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Example;
