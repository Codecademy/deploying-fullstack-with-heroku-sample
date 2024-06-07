import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
  console.log(
    'From: ',
    dates[0],
    ', to: ',
    dates[1],
    dateStrings[0],
    ', to: ',
    dateStrings[1],
  );
}

const rangePresets = [
  {
    label: 'This Month',
    value: [dayjs().startOf('month'), dayjs().endOf('month')],
  },
];

const PresettedRanges = () => {
  return (
    <Space direction='vertical' size={12}>
      <RangePicker presets={rangePresets} onChange={onChange} />
      <RangePicker
        presets={rangePresets}
        showTime
        format='YYYY/MM/DD HH:mm:ss'
        onChange={onChange}
      />
    </Space>
  );
};

export default PresettedRanges;
