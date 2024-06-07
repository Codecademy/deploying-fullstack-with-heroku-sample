import React from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const items = [
  {
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item（disabled）',
    key: '3',
    disabled: true,
  },
];
const OtherElements = () => {
  return (
    <Space>
      <Dropdown menu={{ items }}>
        <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </Dropdown>
    </Space>
  );
};

export default OtherElements;
