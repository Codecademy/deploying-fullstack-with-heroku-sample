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
import PropTypes from 'prop-types';

const SubscriptionGraph = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={320}>
      <ScatterChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <CartesianGrid
          strokeDasharray='5 5'
          stroke='#E2E8F0'
          vertical={false}
        />
        <XAxis
          type='number'
          dataKey='number'
          name='number'
          tickLine={false}
          axisLine={false}
          ticks={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]}
        />
        <YAxis
          type='number'
          dataKey='value'
          name='value'
          tickLine={false}
          axisLine={false}
          ticks={[100, 200, 300, 400, 500, 600]}
        />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          labelStyle={{ color: 'black' }}
        />
        <Scatter data={data} fill='#8884d8' />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default SubscriptionGraph;

SubscriptionGraph.defaultProps = {
  data: [],
};

SubscriptionGraph.propTypes = {
  data: PropTypes.array,
};
