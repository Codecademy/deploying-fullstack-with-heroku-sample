import React from 'react';
import PropTypes from 'prop-types';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { data01, data02 } from './data';

const TwoSimplePieChart = () => (
  <ResponsiveContainer width='100%' height={300}>
    <PieChart>
      <Pie
        dataKey='value'
        isAnimationActive={false}
        data={data01}
        cx='35%'
        cy='50%'
        outerRadius={80}
        fill='#4299E1'
        label
      />
      <Pie
        dataKey='value'
        data={data02}
        cx='70%'
        cy='50%'
        innerRadius={40}
        outerRadius={80}
        fill='#F04F47'
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

TwoSimplePieChart.propTypes = {
  dataKey: PropTypes.node,
};
export default TwoSimplePieChart;
