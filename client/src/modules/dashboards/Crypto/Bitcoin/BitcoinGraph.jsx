import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';

const onGetDataKey = (value) => {
  switch (value) {
    case 0:
      return 'month';

    case 1:
      return 'date';

    case 2:
      return 'day';

    case 3:
      return 'time';

    default:
      return 'month';
  }
};

const BitcoinGraph = ({ data, value }) => {
  return (
    <ResponsiveContainer width='100%' height={360}>
      <AreaChart data={data} margin={{ top: 50, right: 0, left: 0, bottom: 0 }}>
        <XAxis
          dataKey={onGetDataKey(value)}
          tickLine={false}
          axisLine={false}
          padding={{ left: 20, right: 20 }}
        />
        <Tooltip labelStyle={{ color: 'black' }} />
        <YAxis
          tickLine={false}
          axisLine={false}
          ticks={[2000, 4000, 6000, 8000, 10000]}
          type='number'
        />
        <CartesianGrid
          strokeDasharray='2 10'
          stroke='#E53E3E'
          vertical={false}
        />
        <defs>
          <linearGradient id='color15' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#FED7E2' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#FFF5F7' stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <Area
          dataKey='amount'
          strokeWidth={2}
          stackId='2'
          stroke='#E53E3E'
          fill='url(#color15)'
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BitcoinGraph;

BitcoinGraph.defaultProps = {
  data: [],
};

BitcoinGraph.propTypes = {
  data: PropTypes.array,
  value: PropTypes.number,
};
