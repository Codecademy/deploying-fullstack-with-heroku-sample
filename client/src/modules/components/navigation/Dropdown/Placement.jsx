import React from 'react';
import { Button, Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
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
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
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
];
const Placement = () => {
  return (
    <Space direction='vertical'>
      <Space wrap>
        <Dropdown
          menu={{
            items,
          }}
          placement='bottomLeft'
        >
          <Button>Bottom Left</Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement='bottom'
        >
          <Button>Bottom Center</Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement='bottomRight'
        >
          <Button>Bottom Right</Button>
        </Dropdown>
      </Space>
      <Space wrap>
        <Dropdown
          menu={{
            items,
          }}
          placement='topLeft'
        >
          <Button>Top Left</Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement='top'
        >
          <Button>Top Center</Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement='topRight'
        >
          <Button>Top Right</Button>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default Placement;
