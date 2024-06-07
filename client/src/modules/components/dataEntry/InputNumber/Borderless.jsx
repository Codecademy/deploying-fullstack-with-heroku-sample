import React from 'react';
import { InputNumber } from 'antd';

const Borderless = () => {
  return <InputNumber min={1} max={10} defaultValue={3} bordered={false} />;
};

export default Borderless;
