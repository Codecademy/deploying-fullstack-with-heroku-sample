import { Mentions } from 'antd';
import React, { useState } from 'react';

const { Option } = Mentions;
const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};
const CustomizeSuggestions = () => {
  const [prefix, setPrefix] = useState('@');
  const onSearch = (_, newPrefix) => {
    setPrefix(newPrefix);
  };
  return (
    <Mentions
      style={{
        width: '100%',
      }}
      placeholder='input @ to mention people, # to mention tag'
      prefix={['@', '#']}
      onSearch={onSearch}
    >
      {(MOCK_DATA[prefix] || []).map((value) => (
        <Option key={value} value={value}>
          {value}
        </Option>
      ))}
    </Mentions>
  );
};

export default CustomizeSuggestions;
