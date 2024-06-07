import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';
import PropTypes from 'prop-types';

const ProfileViewsGraph = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={100}>
      <BarChart barSize={13} data={data}>
        <XAxis dataKey='data' axisLine={false} tickLine={false} />
        <Bar dataKey='number' fill='#E2E8F0' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProfileViewsGraph;

ProfileViewsGraph.defaultProps = {
  data: [],
};

ProfileViewsGraph.propTypes = {
  data: PropTypes.array,
};
