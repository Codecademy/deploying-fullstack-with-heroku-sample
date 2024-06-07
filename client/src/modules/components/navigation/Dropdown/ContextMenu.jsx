import React from 'react';
import { Dropdown, Space } from 'antd';
import { StyledSiteDropdownContextMenu } from './ContextMenu.styled';

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

const ContextMenu = () => {
  return (
    <Space>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['contextMenu']}
      >
        <StyledSiteDropdownContextMenu
          style={{
            textAlign: 'center',
            height: 200,
            lineHeight: '200px',
          }}
        >
          Right Click on here
        </StyledSiteDropdownContextMenu>
      </Dropdown>
    </Space>
  );
};

export default ContextMenu;
