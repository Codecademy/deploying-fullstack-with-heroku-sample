import React from 'react';
import { Space, Typography } from 'antd';

const { Title } = Typography;

const TitleComponent = () => {
  return (
    <Space direction='vertical'>
      <Title>h1. Ant Design</Title>
      <Title level={2}>h2. Ant Design</Title>
      <Title level={3}>h3. Ant Design</Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>
    </Space>
  );
};

export default TitleComponent;
