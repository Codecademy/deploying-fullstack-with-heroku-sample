import React from 'react';
import { Checkbox, Col, Row, Space } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const UseWithGrid = () => {
  return (
    <Space>
      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
        <Row>
          <Col span={8}>
            <Checkbox value='A'>A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value='B'>B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value='C'>C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value='D'>D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value='E'>E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </Space>
  );
};

export default UseWithGrid;
