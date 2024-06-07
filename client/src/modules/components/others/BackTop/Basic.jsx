import React from 'react';
import { FloatButton, Space } from 'antd';
import { StyledSiteBackTopBasic } from './Basic.styled';

const Basic = () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <FloatButton.BackTop />
      Scroll down to see the bottom-right
      <StyledSiteBackTopBasic> gray </StyledSiteBackTopBasic>
      button.
    </Space>
  );
};

export default Basic;
