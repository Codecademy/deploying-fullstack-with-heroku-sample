import React from 'react';
import { Space, TimePicker } from 'antd';

const IntervalOption = () => {
  return (
    <Space>
      <TimePicker minuteStep={15} secondStep={10} />
    </Space>
  );
};

export default IntervalOption;
