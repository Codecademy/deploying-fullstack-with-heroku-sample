import React from 'react';
import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import data from './data';

const SimpleFunnel = () => (
  <ResponsiveContainer width='100%' height={200}>
    <FunnelChart width={730} height={250}>
      <Tooltip />
      <Funnel dataKey='value' data={data} isAnimationActive>
        <LabelList position='right' fill='#000' stroke='none' dataKey='name' />
      </Funnel>
    </FunnelChart>
  </ResponsiveContainer>
);

export default SimpleFunnel;
