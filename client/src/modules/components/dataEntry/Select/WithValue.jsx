import React from 'react';
import { Select, Space } from 'antd';

const Option = Select.Option;

const WithValue = () => {
  function handleChange(value) {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  }

  return (
    <Space>
      <Select
        labelInValue
        defaultValue={{ key: 'lucy' }}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value='jack'>Jack (100)</Option>
        <Option value='lucy'>Lucy (101)</Option>
      </Select>
    </Space>
  );
};

export default WithValue;
