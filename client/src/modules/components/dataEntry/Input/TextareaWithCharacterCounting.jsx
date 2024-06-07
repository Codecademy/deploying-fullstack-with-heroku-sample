import { Input } from 'antd';
import React from 'react';

const { TextArea } = Input;

const onChange = (e) => {
  console.log('Change:', e.target.value);
};

const TextareaWithCharacterCounting = () => {
  return (
    <TextArea
      showCount
      maxLength={100}
      style={{ height: 120 }}
      onChange={onChange}
    />
  );
};

export default TextareaWithCharacterCounting;
