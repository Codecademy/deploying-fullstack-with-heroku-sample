import React from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';

class SliderWithDecimal extends React.Component {
  state = {
    inputValue: 0,
  };
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    return (
      <Row style={{ width: '100%' }}>
        <Col sm={12} xs={24}>
          <Slider
            min={0}
            max={1}
            onChange={this.onChange}
            value={this.state.inputValue}
            step={0.01}
          />
        </Col>
        <Col sm={12} xs={24}>
          <InputNumber
            min={0}
            max={1}
            step={0.01}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

export default SliderWithDecimal;
