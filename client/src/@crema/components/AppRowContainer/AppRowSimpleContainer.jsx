import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import { StyledAppRowContainer } from './index.styled';
import AppAnimate from '../AppAnimate';

const AppRowSimpleContainer = ({ children }) => {
  return (
    <StyledAppRowContainer>
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <Row gutter={{ xs: 16, sm: 16, md: 32 }}>{children}</Row>
      </AppAnimate>
    </StyledAppRowContainer>
  );
};

export default AppRowSimpleContainer;
AppRowSimpleContainer.propTypes = {
  children: PropTypes.node,
};
