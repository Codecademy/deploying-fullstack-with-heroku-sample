import React from 'react';
import { Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { StyledAntBadgeGroup } from './index.styled';

const Basic = () => {
  return (
    <StyledAntBadgeGroup>
      <Badge count={5}>
        <a href='#' className='head-example' />
      </Badge>
      <Badge count={0} showZero>
        <a href='#' className='head-example' />
      </Badge>
      <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
        <a href='#' className='head-example' />
      </Badge>
    </StyledAntBadgeGroup>
  );
};

export default Basic;
