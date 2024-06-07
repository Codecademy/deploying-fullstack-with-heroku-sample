import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

const data = [
  {
    month: 'Jan',
    order: 14000,
    return: 2400,
  },
  {
    month: 'Feb',
    order: 28000,
    return: 4398,
  },
  {
    month: 'Mar',
    order: 9800,
    return: 2000,
  },
  {
    month: 'Apr',
    order: 11000,
    return: 10000,
  },
  {
    month: 'May',
    order: 7000,
    return: 4000,
  },
  {
    month: 'Jun',
    order: 12780,
    return: 2300,
  },
  {
    month: 'Jul',
    order: 8000,
    return: 4300,
  },
  {
    month: 'Aug',
    order: 14000,
    return: 2400,
  },
  {
    month: 'Sep',
    order: 13000,
    return: 1398,
  },
  {
    month: 'Oct',
    order: 17000,
    return: 9800,
  },
  {
    month: 'Nov',
    order: 12780,
    return: 3908,
  },
  {
    month: 'Dec',
    order: 18900,
    return: 4800,
  },
];

const SaleStaticChart = () => {
  return (
    <ResponsiveContainer width='100%' height={280}>
      <BarChart
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray='3 1'
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey='month' />
        <Tooltip labelStyle={{ color: 'black' }} />
        <Bar dataKey='return' fill='#F44D50' barSize={8} />
        <Bar dataKey='order' fill='#0A8FDC' barSize={8} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SaleStaticChart;
