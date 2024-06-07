import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const items = [
  {
    label: <a href='https://www.antgroup.com'>1st menu item</a>,
    key: '0',
  },
  {
    label: <a href='https://www.aliyun.com'>2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const TriggerMode = () => {
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
        Click me <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default TriggerMode;
