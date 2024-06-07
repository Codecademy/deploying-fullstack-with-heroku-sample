import React from 'react';
import { InputNumber, Space } from 'antd';

const Decimal = () => {
  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <Space>
      <InputNumber min={0} max={10} step={0.1} onChange={onChange} />
    </Space>
  );
};

export default Decimal;
