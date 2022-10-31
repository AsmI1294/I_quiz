import React from "react";
import { useLoaderData } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Statistics = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div>
      <p className="text-center display-3 bg-info fw-semibold text-secondary py-3">
        Number of quizes on all the topics
      </p>
      <div className="d-flex justify-content-center">
        {/* recharts Barchart */}
        <ResponsiveContainer width={"50%"} height={500}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis></YAxis>
            <Tooltip />
            <Legend />
            <Bar dataKey="total" stackId="a" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
