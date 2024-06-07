import React from 'react';
import PropsTypes from 'prop-types';
import { StyledPremiumBrand } from './index.styled';

const PremiumBrandWrapper = ({ children }) => {
  return <StyledPremiumBrand>{children}</StyledPremiumBrand>;
};

export default PremiumBrandWrapper;

PremiumBrandWrapper.propTypes = {
  children: PropsTypes.node,
};
