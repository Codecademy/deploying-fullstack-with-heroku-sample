import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import PropTypes from 'prop-types';

const AccountGraph = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={320}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />

        <Tooltip labelStyle={{ color: 'black' }} />
        <Area
          type='monotone'
          dataKey='complete'
          stackId='1'
          stroke='#8884d8'
          fill='#8884d8'
        />
        <Area
          type='monotone'
          dataKey='week'
          stackId='1'
          stroke='#82ca9d'
          fill='#82ca9d'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AccountGraph;

AccountGraph.defaultProps = {
  data: [],
};

AccountGraph.propTypes = {
  data: PropTypes.array,
};
