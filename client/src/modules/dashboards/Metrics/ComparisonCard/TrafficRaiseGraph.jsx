import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const TrafficRaiseGraph = ({ data }) => {
  return (
    <ResponsiveContainer height={200} width='100%'>
      <LineChart data={data}>
        <Line
          type='monotone'
          dataKey='traffic'
          stroke='#4299E1'
          strokeWidth={4}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrafficRaiseGraph;

TrafficRaiseGraph.defaultProps = {
  data: [],
};

TrafficRaiseGraph.propTypes = {
  data: PropTypes.array,
};
