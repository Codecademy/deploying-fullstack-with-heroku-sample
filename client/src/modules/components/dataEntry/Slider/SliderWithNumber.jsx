import React from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';

class SliderWithNumber extends React.Component {
  state = {
    inputValue: 1,
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
            min={1}
            max={20}
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </Col>
        <Col sm={12} xs={24}>
          <InputNumber
            min={1}
            max={20}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

export default SliderWithNumber;
