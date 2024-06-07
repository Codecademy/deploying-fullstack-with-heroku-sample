import React, { useState } from 'react';
import { Button, Radio, Space } from 'antd';

function SpaceSize() {
  const [size, setSize] = useState('small');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio value='small'>Small</Radio>
        <Radio value='middle'>Middle</Radio>
        <Radio value='large'>Large</Radio>
      </Radio.Group>
      <br />
      <br />
      <Space size={size}>
        <Button type='primary'>Primary</Button>
        <Button>Default</Button>
        <Button type='dashed'>Dashed</Button>
        <Button type='link'>Link</Button>
      </Space>
    </div>
  );
}

const SpaceLayout = () => {
  return <SpaceSize />;
};

export default SpaceLayout;
