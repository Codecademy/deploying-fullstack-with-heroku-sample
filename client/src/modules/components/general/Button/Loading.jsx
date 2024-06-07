import React, { Component } from 'react';
import { Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

class Loading extends Component {
  state = {
    loadings: [],
  };

  enterLoading = (index) => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };

  render() {
    const { loadings } = this.state;
    return (
      <Space size='large' wrap>
        <Button type='primary' loading>
          Loading
        </Button>
        <Button type='primary' size='small' loading>
          Loading
        </Button>
        <Button type='primary' icon={<PoweroffOutlined />} loading />
        <br />
        <Button
          type='primary'
          loading={loadings[0]}
          onClick={() => this.enterLoading(0)}
        >
          Click me!
        </Button>
        <Button
          type='primary'
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type='primary'
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
      </Space>
    );
  }
}

export default Loading;
