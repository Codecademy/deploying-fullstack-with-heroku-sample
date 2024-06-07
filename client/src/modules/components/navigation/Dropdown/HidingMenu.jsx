import React, { Component } from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class HidingMenu extends Component {
  state = {
    visible: false,
  };

  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  render() {
    const items = [
      {
        label: 'Clicking me will not close the menu.',
        key: '1',
      },
      {
        label: 'Clicking me will not close the menu also.',
        key: '2',
      },
      {
        label: 'Clicking me will close the menu.',
        key: '3',
      },
    ];
    return (
      <Space>
        <Dropdown
          menu={{
            items,
            onClick: this.handleMenuClick,
          }}
          onOpenChange={this.handleVisibleChange}
          open={this.state.visible}
        >
          <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
            Hover me <DownOutlined />
          </a>
        </Dropdown>
      </Space>
    );
  }
}

export default HidingMenu;
