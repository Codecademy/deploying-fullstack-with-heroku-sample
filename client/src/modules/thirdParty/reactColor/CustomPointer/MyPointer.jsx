import React from 'react';
import { Button } from 'antd';
import { BgColorsOutlined } from '@ant-design/icons';

import styled from 'styled-components';

const StyledMyPointerBtn = styled(Button)`
  border: 0 none;
  width: 40px;
  height: 40px;
  box-shadow: none;
`;

export const MyPointer = () => {
  return (
    <StyledMyPointerBtn>
      <BgColorsOutlined />
    </StyledMyPointerBtn>
  );
};

export default MyPointer;
