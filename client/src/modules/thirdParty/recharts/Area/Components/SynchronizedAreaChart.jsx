import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import data from './data';

const SynchronizedAreaChart = () => (
  <ResponsiveContainer width='100%'>
    <div>
      <p className='recharts-area-item'>A demo of synchronized AreaCharts</p>
      <div className='recharts-area-item'>
        <ResponsiveContainer width='100%' height={200}>
          <AreaChart
            data={data}
            syncId='anyId'
            margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stroke='#4299E1'
              fill='#4299E1'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className='recharts-area-item'>Maybe some other content</p>
      <div className='recharts-area-item'>
        <ResponsiveContainer width='100%' height={200}>
          <AreaChart
            data={data}
            syncId='anyId'
            margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='pv'
              stroke='#F04F47'
              fill='#F04F47'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </ResponsiveContainer>
);

export default SynchronizedAreaChart;
