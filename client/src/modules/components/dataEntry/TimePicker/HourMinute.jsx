import React from 'react';
import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs';

const format = 'HH:mm';

const HourMinute = () => {
  return (
    <Space>
      <TimePicker defaultValue={dayjs('12:08', format)} format={format} />
    </Space>
  );
};

export default HourMinute;
