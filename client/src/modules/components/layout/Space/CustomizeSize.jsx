import React, { useState } from 'react';
import { Button, Slider, Space } from 'antd';

function SpaceCustomizeSize() {
  const [size, setSize] = useState(8);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Slider value={size} onChange={(value) => setSize(value)} />
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

const CustomizeSize = () => {
  return <SpaceCustomizeSize />;
};

export default CustomizeSize;
