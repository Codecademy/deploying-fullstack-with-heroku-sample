import { Col, Row, Statistic } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

import React from 'react';

const Unit = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title='Feedback' value={1128} prefix={<LikeOutlined />} />
      </Col>
      <Col span={12}>
        <Statistic title='Unmerged' value={93} suffix='/ 100' />
      </Col>
    </Row>
  );
};

export default Unit;
