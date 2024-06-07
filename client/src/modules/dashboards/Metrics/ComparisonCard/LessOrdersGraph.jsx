import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const LessOrdersGraph = ({ data }) => {
  return (
    <ResponsiveContainer height={200} width='100%'>
      <AreaChart
        width={500}
        height={100}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Area
          type='monotone'
          dataKey='orders'
          stroke='#E53E3E'
          fill='#E53E3E'
          strokeWidth={4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LessOrdersGraph;

LessOrdersGraph.defaultProps = {
  data: [],
};

LessOrdersGraph.propTypes = {
  data: PropTypes.array,
};
