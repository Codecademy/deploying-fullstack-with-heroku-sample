import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;

const DateFormat = () => {
  return (
    <Space direction='vertical' size={12}>
      <DatePicker
        defaultValue={dayjs('2015/01/01', dateFormat)}
        format={dateFormat}
      />
      <DatePicker
        defaultValue={dayjs('01/01/2015', dateFormatList[0])}
        format={dateFormatList}
      />
      <DatePicker
        defaultValue={dayjs('2015/01', monthFormat)}
        format={monthFormat}
        picker='month'
      />
      <RangePicker
        defaultValue={[
          dayjs('2015/01/01', dateFormat),
          dayjs('2015/01/01', dateFormat),
        ]}
        format={dateFormat}
      />
      <DatePicker
        defaultValue={dayjs('2015/01/01', dateFormat)}
        format={customFormat}
      />
    </Space>
  );
};

export default DateFormat;
