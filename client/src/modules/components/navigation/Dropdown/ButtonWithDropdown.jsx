import React from 'react';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

function handleButtonClick() {
  message.info('Click on left button.');
}

function handleMenuClick() {
  message.info('Click on menu item.');
}

const items = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: '1st menu item',
  },
  {
    key: '2',
    icon: <UserOutlined />,
    label: '2nd menu item',
  },
  {
    key: '3',
    icon: <UserOutlined />,
    label: '3rd menu item',
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const ButtonWithDropdown = () => {
  return (
    <Space wrap>
      <Dropdown.Button onClick={handleButtonClick} menu={menuProps}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button
        menu={menuProps}
        placement='bottom'
        icon={<UserOutlined />}
      >
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button onClick={handleButtonClick} menu={menuProps} disabled>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button
        menu={menuProps}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip title='tooltip' key='leftButton'>
            {leftButton}
          </Tooltip>,
          React.cloneElement(rightButton, { loading: true }),
        ]}
      >
        With Tooltip
      </Dropdown.Button>
      <Dropdown menu={menuProps}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );
};

export default ButtonWithDropdown;
