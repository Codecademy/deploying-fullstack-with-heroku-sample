import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import data from './data';

const StackedBarChart = () => (
  <ResponsiveContainer width='100%' height={200}>
    <BarChart data={data} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Legend />
      <Bar dataKey='pv' stackId='a' fill='#4299E1' />
      <Bar dataKey='uv' stackId='a' fill='#F04F47' />
    </BarChart>
  </ResponsiveContainer>
);

export default StackedBarChart;
