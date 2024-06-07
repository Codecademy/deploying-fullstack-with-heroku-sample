import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import data from './data';

const DashedLineChart = () => (
  <ResponsiveContainer width='100%' height={200}>
    <LineChart data={data} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='pv'
        stroke='#4299E1'
        strokeDasharray='5 5'
      />
      <Line
        type='monotone'
        dataKey='uv'
        stroke='#F04F47'
        strokeDasharray='3 4 5 2'
      />
    </LineChart>
  </ResponsiveContainer>
);

export default DashedLineChart;
