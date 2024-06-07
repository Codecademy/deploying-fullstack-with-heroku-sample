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
import { StyledRechartsAreaItem } from './index.styled';

const data = [
  { name: 'Page A', uv: 4000 },
  { name: 'Page B', uv: 3000 },
  { name: 'Page C', uv: 2000 },
  { name: 'Page D' },
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 2390 },
  { name: 'Page G', uv: 3490 },
];
const AreaChartConnectNulls = () => (
  <ResponsiveContainer width='100%'>
    <div>
      <StyledRechartsAreaItem>
        <ResponsiveContainer width='100%' height={200}>
          <AreaChart
            data={data}
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
      </StyledRechartsAreaItem>
      <StyledRechartsAreaItem>
        <ResponsiveContainer width='100%' height={200}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area
              connectNulls={true}
              type='monotone'
              dataKey='uv'
              stroke='#4299E1'
              fill='#4299E1'
            />
          </AreaChart>
        </ResponsiveContainer>
      </StyledRechartsAreaItem>
    </div>
  </ResponsiveContainer>
);

export default AreaChartConnectNulls;
