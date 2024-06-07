import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const dateFormat = 'MMM DD,YYYY';

const Disabled = () => {
  return (
    <Space direction='vertical' size={12}>
      <DatePicker defaultValue={dayjs('2015-06-06', dateFormat)} disabled />
      <DatePicker
        picker='month'
        defaultValue={dayjs('2015-06', 'YYYY-MM')}
        disabled
      />
      <RangePicker
        defaultValue={[
          dayjs('2015-06-06', dateFormat),
          dayjs('2015-06-06', dateFormat),
        ]}
        disabled
      />
      <RangePicker
        defaultValue={[
          dayjs('2021-09-03', dateFormat),
          dayjs('2021-11-22', dateFormat),
        ]}
        disabled={[false, true]}
      />
    </Space>
  );
};

export default Disabled;
