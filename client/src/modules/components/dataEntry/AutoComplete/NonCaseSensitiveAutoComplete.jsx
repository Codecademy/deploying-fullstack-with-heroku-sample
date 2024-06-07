import React from 'react';
import { AutoComplete, Space } from 'antd';

const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];

const NonCaseSensitiveAutoComplete = () => {
  return (
    <Space>
      <AutoComplete
        style={{
          width: 200,
        }}
        options={options}
        placeholder='try to type `b`'
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </Space>
  );
};

export default NonCaseSensitiveAutoComplete;
