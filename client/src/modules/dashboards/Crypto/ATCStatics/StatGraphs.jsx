import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';

const StatGraphs = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={320}>
      <LineChart
        data={data}
        margin={{ top: 50, right: 0, left: -5, bottom: 0 }}
      >
        <XAxis
          dataKey='name'
          tickLine={false}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip
          labelStyle={{ color: 'black' }}
          contentStyle={{
            borderRadius: 12,
            borderColor: '#31354188',
            background: '#FFFFFFCA',
          }}
        />
        <CartesianGrid stroke='#eee' horizontal={true} vertical={false} />
        <Line
          type='monotone'
          dataKey='Buy'
          stroke='#0A8FDC'
          dot={false}
          strokeWidth={2}
          activeDot={{ r: 4 }}
        />
        <Line
          type='monotone'
          dot={false}
          strokeWidth={2}
          dataKey='Sell'
          stroke='#F04F47'
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatGraphs;

StatGraphs.defaultProps = {
  data: [],
};

StatGraphs.propTypes = {
  data: PropTypes.array,
};
