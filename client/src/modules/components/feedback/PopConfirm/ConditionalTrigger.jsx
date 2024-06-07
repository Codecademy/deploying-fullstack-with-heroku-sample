import React from 'react';
import { message, Popconfirm, Space, Switch } from 'antd';

class ConditionalTrigger extends React.Component {
  state = {
    visible: false,
    condition: true, // Whether meet the condition, if not show popconfirm.
  };
  changeCondition = (value) => {
    this.setState({ condition: value });
  };
  confirm = () => {
    this.setState({ visible: false });
    message.success('Next step.');
  };
  cancel = () => {
    this.setState({ visible: false });
    message.error('Click on cancel.');
  };
  handleVisibleChange = (visible) => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(this.state.condition);
    if (this.state.condition) {
      this.confirm(); // next step
    } else {
      this.setState({ visible }); // show the popconfirm
    }
  };

  render() {
    return (
      <Space wrap>
        <Popconfirm
          title='Are you sure delete this task?'
          open={this.state.visible}
          onOpenChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText='Yes'
          cancelText='No'
        >
          <a href='#'>Delete a task</a>
        </Popconfirm>
        Whether directly execute：
        <Switch defaultChecked onChange={this.changeCondition} />
      </Space>
    );
  }
}

export default ConditionalTrigger;
