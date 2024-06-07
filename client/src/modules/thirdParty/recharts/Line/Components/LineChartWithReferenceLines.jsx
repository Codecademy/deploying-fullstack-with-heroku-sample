import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import data from './data';

const LineChartWithReferenceLines = () => (
  <ResponsiveContainer width='100%' height={200}>
    <LineChart data={data} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Legend />
      <ReferenceLine x='Page C' stroke='red' label='Max PV PAGE' />
      <ReferenceLine y={9800} label='Max' stroke='red' />
      <Line type='monotone' dataKey='pv' stroke='#4299E1' />
      <Line type='monotone' dataKey='uv' stroke='#F04F47' />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartWithReferenceLines;
