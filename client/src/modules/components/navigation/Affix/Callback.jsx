import React from 'react';
import { Affix, Button, Space } from 'antd';

const Callback = () => {
  return (
    <Space>
      <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>
    </Space>
  );
};

export default Callback;
