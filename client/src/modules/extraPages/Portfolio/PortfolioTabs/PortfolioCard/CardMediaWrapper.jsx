import React from 'react';
import PropTypes from 'prop-types';
import { StyledCardMediaWrapper } from './index.styled';

const CardWrapper = ({ children, ...rest }) => {
  return (
    <StyledCardMediaWrapper className='no-card-space-ltr-rtl' {...rest}>
      {children}
    </StyledCardMediaWrapper>
  );
};

export default CardWrapper;

CardWrapper.propTypes = {
  children: PropTypes.node,
};
