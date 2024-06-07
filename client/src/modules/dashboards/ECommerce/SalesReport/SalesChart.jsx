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
    days: '1st',
    order: 14000,
    return: 2400,
  },
  {
    days: '2nd',
    order: 22000,
    return: 14398,
  },
  {
    days: '3rd',
    order: 9800,
    return: 2000,
  },
  {
    days: '4th',
    order: 11000,
    return: 12000,
  },
  {
    days: '5th',
    order: 10000,
    return: 4000,
  },
  {
    days: '6th',
    order: 12780,
    return: 10900,
  },
  {
    days: '7th',
    order: 12000,
    return: 4300,
  },
  {
    days: '8th',
    order: 12000,
    return: 14900,
  },
  {
    days: '9th',
    order: 18000,
    return: 1398,
  },
  {
    days: '10th',
    order: 17000,
    return: 9800,
  },
  {
    days: '11th',
    order: 12780,
    return: 3908,
  },
  {
    days: '12th',
    order: 20900,
    return: 12800,
  },
  {
    days: '13th',
    order: 17000,
    return: 4900,
  },
  {
    days: '14th',
    order: 7000,
    return: 4000,
  },
  {
    days: '15th',
    order: 17000,
    return: 9800,
  },
];

const SalesChart = () => {
  return (
    <ResponsiveContainer width='100%' height={250}>
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
        <XAxis dataKey='days' />
        {/*<YAxis />*/}
        <Tooltip
          labelStyle={{ color: 'black' }}
          contentStyle={{
            borderRadius: 12,
            borderColor: '#31354188',
            background: '#FFFFFFCA',
          }}
        />
        <Bar stackId='a' dataKey='return' fill='#F04F47' barSize={8} />
        <Bar
          stackId='a'
          dataKey='order'
          fill='#0A8FDC'
          margin={{ bottom: -15 }}
          barSize={8}
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
