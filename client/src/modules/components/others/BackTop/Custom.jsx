import React from 'react';
import { FloatButton } from 'antd';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const Custom = () => {
  return (
    <div style={{ height: '600vh', padding: 8, width: '100%' }}>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <FloatButton.BackTop>
        <div style={style}>UP</div>
        UP
      </FloatButton.BackTop>
    </div>
  );
};

export default Custom;
