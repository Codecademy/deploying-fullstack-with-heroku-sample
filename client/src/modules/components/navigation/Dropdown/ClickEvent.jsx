import React from 'react';
import { Dropdown, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
const ClickEvent = () => {
  return (
    <Space>
      <Dropdown
        menu={{
          items,
          onClick,
        }}
      >
        <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
          Hover me, Click menu item <DownOutlined />
        </a>
      </Dropdown>
    </Space>
  );
};

export default ClickEvent;
