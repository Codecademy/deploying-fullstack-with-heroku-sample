import React from 'react';
import { InputNumber, Space } from 'antd';

const Formatter = () => {
  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <Space>
      <InputNumber
        defaultValue={1000}
        formatter={(value) =>
          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onChange}
      />
      <InputNumber
        defaultValue={100}
        min={0}
        max={100}
        formatter={(value) => `${value}%`}
        parser={(value) => value.replace('%', '')}
        onChange={onChange}
      />
    </Space>
  );
};

export default Formatter;
