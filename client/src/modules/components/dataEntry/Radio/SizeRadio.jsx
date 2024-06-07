import React from 'react';
import { Radio, Space } from 'antd';

const SizeRadio = () => {
  return (
    <Space direction='vertical'>
      <Radio.Group defaultValue='a' size='large'>
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b'>Shanghai</Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group defaultValue='a' style={{ marginTop: 16 }}>
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b'>Shanghai</Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group defaultValue='a' size='small' style={{ marginTop: 16 }}>
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b'>Shanghai</Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </Radio.Group>
    </Space>
  );
};

export default SizeRadio;
