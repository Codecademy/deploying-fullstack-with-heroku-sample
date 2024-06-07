import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const ViewGraph = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={178}>
      <LineChart
        data={data}
        margin={{ top: 30, right: 0, left: 0, bottom: 20 }}
      >
        <Line
          type='monotone'
          dataKey='rate'
          stroke='#ffffff'
          dot={false}
          strokeWidth={2}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ViewGraph;

ViewGraph.defaultProps = {
  data: [],
};

ViewGraph.propTypes = {
  data: PropTypes.array,
};
