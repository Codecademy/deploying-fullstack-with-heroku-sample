import React from 'react';
import { Input, Space } from 'antd';

const { TextArea } = Input;

const TextAreas = () => {
  return (
    <Space>
      <TextArea rows={4} />
    </Space>
  );
};

export default TextAreas;
