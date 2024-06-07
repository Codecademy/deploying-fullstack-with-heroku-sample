import React from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import data from './data';

const SameDataComposedChart = () => (
  <ResponsiveContainer width='100%' height={200}>
    <ComposedChart
      data={data}
      margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
    >
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke='#f5f5f5' />
      <Bar dataKey='uv' barSize={20} fill='#4299E1' />
      <Line type='monotone' dataKey='uv' stroke='#59AA2B' />
    </ComposedChart>
  </ResponsiveContainer>
);

export default SameDataComposedChart;
