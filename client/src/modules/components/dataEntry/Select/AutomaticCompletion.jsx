import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const AutomaticCompletion = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div style={{ width: '100%' }}>
      <Select
        mode='tags'
        style={{ width: '100%' }}
        onChange={handleChange}
        tokenSeparators={[',']}
      >
        {children}
      </Select>
    </div>
  );
};

export default AutomaticCompletion;
