import React from 'react';
import { Button, Drawer } from 'antd';

class RenderInCurrentDom extends React.Component {
  state = { visible: false };

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

  render() {
    return (
      <div className='site-drawer-render-in-current-wrapper'>
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type='primary' onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title='Basic Drawer'
          placement='right'
          closable={false}
          onClose={this.onClose}
          open={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

export default RenderInCurrentDom;
