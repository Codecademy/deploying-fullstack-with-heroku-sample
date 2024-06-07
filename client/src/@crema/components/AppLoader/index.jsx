import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const StyledAppLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const AppLoader = () => {
  return (
    <StyledAppLoader>
      <Spin />
    </StyledAppLoader>
  );
};

export default AppLoader;
