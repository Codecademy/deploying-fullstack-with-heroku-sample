import React from 'react';
import PropTypes from 'prop-types';
import PremiumBrandWrapper from './PremiumBrandWrapper';
import { StyledTitlewrapper2, StyledTitlewrapper5 } from './index.styled';

const PremiumBrand = ({ premiumBrand }) => {
  return (
    <PremiumBrandWrapper>
      <img src={premiumBrand.srcImg} alt={premiumBrand.subTitle} />
      <div className='premium-brand-content'>
        <StyledTitlewrapper5>{premiumBrand.subTitle}</StyledTitlewrapper5>
        <StyledTitlewrapper2>{premiumBrand.title}</StyledTitlewrapper2>
      </div>
    </PremiumBrandWrapper>
  );
};

export default PremiumBrand;

PremiumBrand.propTypes = {
  premiumBrand: PropTypes.object,
};
