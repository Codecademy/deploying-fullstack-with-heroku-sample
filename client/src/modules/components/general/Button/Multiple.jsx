import React, { Component } from 'react';
import { Button, Dropdown, Space } from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const items = [
  { key: 1, label: <span onClick={handleMenuClick}>1st item</span> },
  { key: 2, label: <span onClick={handleMenuClick}>2nd item</span> },
  { key: 3, label: <span onClick={handleMenuClick}>3rd item</span> },
];

class Multiple extends Component {
  render() {
    return (
      <Space wrap>
        <Button type='primary'>primary</Button>
        <Button>secondary</Button>
        <Dropdown.Button menu={{ items }}>Actions</Dropdown.Button>
      </Space>
    );
  }
}

export default Multiple;
