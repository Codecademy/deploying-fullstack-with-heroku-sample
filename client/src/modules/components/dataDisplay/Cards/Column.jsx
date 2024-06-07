import React from 'react';
import { Card, Col, Row } from 'antd';

const Column = () => {
  return (
    <div className='site-card-wrapper' style={{ width: '100%' }}>
      <Row gutter={16}>
        <Col xs={24} sm={8}>
          <Card title='Card title' bordered={false}>
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card title='Card title' bordered={false}>
            Card content
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card title='Card title' bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Column;
