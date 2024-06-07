import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      key={index}
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const AudienceChart = ({ audienceData }) => {
  return (
    <ResponsiveContainer width='100%' height={200}>
      <PieChart>
        <Pie
          data={audienceData}
          cx='50%'
          cy={90}
          startAngle={90}
          endAngle={-270}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={90}
          nameKey='title'
          dataKey='value'
        >
          {audienceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          labelStyle={{ color: 'black' }}
          contentStyle={{
            borderRadius: 12,
            borderColor: '#31354188',
            background: '#FFFFFFCA',
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
export default AudienceChart;

AudienceChart.propTypes = {
  audienceData: PropTypes.array,
};
