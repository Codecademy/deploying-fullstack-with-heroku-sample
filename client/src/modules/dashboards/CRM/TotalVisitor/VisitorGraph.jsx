import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import { useIntl } from 'react-intl';

const VisitorGraph = ({ totalVisitors }) => {
  const { messages } = useIntl();
  return (
    <ResponsiveContainer height={250}>
      <PieChart>
        <text
          x='50%'
          fontWeight={Fonts.MEDIUM}
          fontSize={20}
          y='45%'
          textAnchor='middle'
          dominantBaseline='middle'
        >
          40,000
        </text>
        <text
          x='50%'
          fontWeight={Fonts.MEDIUM}
          fontSize={20}
          y='55%'
          textAnchor='middle'
          dominantBaseline='middle'
        >
          {messages['dashboard.crm.totalVisitor']}
        </text>
        <Pie
          data={totalVisitors}
          startAngle={90}
          endAngle={-270}
          dataKey='value'
          cx='50%'
          cy='50%'
          innerRadius='80%'
          outerRadius='95%'
        >
          {totalVisitors.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
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

export default VisitorGraph;

VisitorGraph.defaultProps = {
  totalVisitors: [],
};

VisitorGraph.propTypes = {
  totalVisitors: PropTypes.array,
};
