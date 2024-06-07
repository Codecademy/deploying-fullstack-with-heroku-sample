import React from 'react';
import PropTypes from 'prop-types';
import PackageCard from './PackageCard';
import { Col } from 'antd';
import { StyledPackageFourCard, StyledPackageFourRow } from './index.styled';

const PackageFour = ({ pricing }) => {
  return (
    <StyledPackageFourCard title='Pricing Package Style 4'>
      <StyledPackageFourRow>
        {pricing.map((data, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <PackageCard pricing={data} />
          </Col>
        ))}
      </StyledPackageFourRow>
    </StyledPackageFourCard>
  );
};

export default PackageFour;

PackageFour.propTypes = {
  pricing: PropTypes.array,
};
