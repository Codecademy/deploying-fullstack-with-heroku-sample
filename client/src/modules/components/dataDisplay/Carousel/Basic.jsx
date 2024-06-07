import React from 'react';
import { Carousel, Space } from 'antd';

const Basic = () => {
  const onChange = (a, b, c) => {
    console.log(a, b, c);
  };
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </Space>
  );
};

export default Basic;
