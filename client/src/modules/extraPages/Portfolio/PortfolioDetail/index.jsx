import React from 'react';
import Product from './Product';
import PremiumBrand from './PremiumBrand';
import Innovation from './Innovation';
import PortfolioSlider from './PortfolioSlider';
import ProjectDescription from './ProjectDescription';
import AppAnimate from '@crema/components/AppAnimate';
import { StyledAppCard } from '../index.styled';
import PropTypes from 'prop-types';

const PortfolioDetail = ({ portfolioData }) => {
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <StyledAppCard className='no-card-space-ltr-rtl'>
        <PortfolioSlider slide={portfolioData.portfolioDetail.slide} />
        <ProjectDescription
          projectDescription={portfolioData.portfolioDetail.projectDescription}
        />
        <Product product={portfolioData.portfolioDetail.product} />
        <PremiumBrand
          premiumBrand={portfolioData.portfolioDetail.premiumBrand}
        />
        <Innovation innovation={portfolioData.portfolioDetail.innovation} />
      </StyledAppCard>
    </AppAnimate>
  );
};

export default PortfolioDetail;

PortfolioDetail.propTypes = {
  portfolioData: PropTypes.object,
};
