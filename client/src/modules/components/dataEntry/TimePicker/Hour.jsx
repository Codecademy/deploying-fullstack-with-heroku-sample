import React from 'react';
import { Space, TimePicker } from 'antd';

const Hour = () => {
  function onChange(time, timeString) {
    console.log(time, timeString);
  }

  return (
    <Space wrap>
      <TimePicker use12Hours onChange={onChange} />
      <TimePicker
        use12Hours
        format='h:mm:ss A'
        onChange={onChange}
        style={{ width: 140 }}
      />
      <TimePicker use12Hours format='h:mm a' onChange={onChange} />
    </Space>
  );
};

export default Hour;
