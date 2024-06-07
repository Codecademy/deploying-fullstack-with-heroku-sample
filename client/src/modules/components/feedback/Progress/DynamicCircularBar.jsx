import React from 'react';
import { Button, Progress, Space } from 'antd';

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const ButtonGroup = Button.Group;

class DynamicCircularBar extends React.Component {
  state = {
    percent: 0,
  };
  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };
  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  render() {
    return (
      <Space>
        <Progress type='circle' percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.decline} icon={<MinusOutlined />} />
          <Button onClick={this.increase} icon={<PlusOutlined />} />
        </ButtonGroup>
      </Space>
    );
  }
}

export default DynamicCircularBar;
