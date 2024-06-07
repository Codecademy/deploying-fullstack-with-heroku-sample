import React from 'react';
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts';
import { data01, data02 } from './data';

const ThreeDimScatterChart = () => (
  <ResponsiveContainer width='100%' height={400}>
    <ScatterChart margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
      <XAxis dataKey={'x'} name='stature' unit='cm' />
      <YAxis dataKey={'y'} name='weight' unit='kg' />
      <ZAxis dataKey={'z'} range={[60, 400]} name='score' unit='km' />
      <CartesianGrid />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name='A school' data={data01} fill='#4299E1' shape='star' />
      <Scatter name='B school' data={data02} fill='#F04F47' shape='triangle' />
    </ScatterChart>
  </ResponsiveContainer>
);

export default ThreeDimScatterChart;
