import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import { StyledAppRowContainer } from './index.styled';
import AppAnimate from '../AppAnimate';

const AppRowContainer = ({ children, style, ...others }) => {
  return (
    <StyledAppRowContainer style={style}>
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <Row
          style={{ flexDirection: 'row' }}
          height='auto'
          gutter={{ xs: 16, sm: 16, md: 32 }}
          {...others}
        >
          {children}
        </Row>
      </AppAnimate>
    </StyledAppRowContainer>
  );
};

export default AppRowContainer;
AppRowContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.any,
};
