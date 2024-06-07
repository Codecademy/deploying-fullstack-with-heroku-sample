import React from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const SalesGraph = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={220}>
      <BarChart barSize={13} data={data}>
        <Bar dataKey='number' fill='#E2E8F0' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesGraph;

SalesGraph.defaultProps = {
  data: [],
};

SalesGraph.propTypes = {
  data: PropTypes.array,
};
