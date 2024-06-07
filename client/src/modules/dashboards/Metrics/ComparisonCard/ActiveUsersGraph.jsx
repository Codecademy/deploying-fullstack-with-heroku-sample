import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const ActiveUsersGraph = ({ data }) => {
  return (
    <ResponsiveContainer height={200} width='100%'>
      <LineChart data={data}>
        <Line
          type='monotone'
          dataKey='activeUsers'
          stroke='#4299E1'
          strokeWidth={4}
          dot={{ r: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ActiveUsersGraph;

ActiveUsersGraph.defaultProps = {
  data: [],
};

ActiveUsersGraph.propTypes = {
  data: PropTypes.array,
};
