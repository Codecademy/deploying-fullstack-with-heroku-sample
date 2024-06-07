import React from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const items = [
  {
    key: 1,
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        1st menu item
      </a>
    ),
  },
  {
    key: 2,
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        2nd menu item
      </a>
    ),
    icon: <DownOutlined />,
    disabled: true,
  },
  {
    key: 3,
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
        3rd menu item
      </a>
    ),
  },
  {
    key: 4,
    label: 'a danger item',
    danger: true,
  },
];

const Basic = () => {
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

export default Basic;
