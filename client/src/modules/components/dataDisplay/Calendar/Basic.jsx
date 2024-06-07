import React from 'react';
import { Calendar, Space } from 'antd';

const Basic = () => {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return (
    <Space direction='vertical'>
      <Calendar onPanelChange={onPanelChange} />
    </Space>
  );
};

export default Basic;
