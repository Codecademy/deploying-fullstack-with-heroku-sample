import React from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const VisitorsGraph = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={240}>
      <BarChart barSize={3} data={data}>
        <Bar dataKey='value' fill='#3335' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VisitorsGraph;

VisitorsGraph.defaultProps = {
  data: [],
};

VisitorsGraph.propTypes = {
  data: PropTypes.array,
};
