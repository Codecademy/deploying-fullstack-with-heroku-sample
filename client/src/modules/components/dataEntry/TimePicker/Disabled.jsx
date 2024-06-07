import React from 'react';
import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs';

const Disabled = () => {
  return (
    <Space>
      <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />
    </Space>
  );
};

export default Disabled;
