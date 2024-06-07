import React from 'react';
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import data from './data';

const SimpleScatterChart = () => (
  <ResponsiveContainer width='100%' height={400}>
    <ScatterChart margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
      <XAxis dataKey={'x'} name='stature' unit='cm' />
      <YAxis dataKey={'y'} name='weight' unit='kg' />
      <Scatter name='A school' data={data} fill='#4299E1' />
      <CartesianGrid />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    </ScatterChart>
  </ResponsiveContainer>
);

export default SimpleScatterChart;
