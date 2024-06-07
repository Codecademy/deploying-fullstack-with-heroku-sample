import React from 'react';
import { Button, Drawer } from 'antd';

class MultiLevelDrawer extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <>
        <Button type='primary' onClick={this.showDrawer}>
          Open drawer
        </Button>
        <Drawer
          title='Multi-level drawer'
          width={520}
          closable={false}
          onClose={this.onClose}
          open={this.state.visible}
        >
          <Button type='primary' onClick={this.showChildrenDrawer}>
            Two-level drawer
          </Button>
          <Drawer
            title='Two-level Drawer'
            width={320}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            open={this.state.childrenDrawer}
          >
            This is two-level drawer
          </Drawer>
        </Drawer>
      </>
    );
  }
}

export default MultiLevelDrawer;
