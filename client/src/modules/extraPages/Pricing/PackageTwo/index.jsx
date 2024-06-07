import React from 'react';
import PropTypes from 'prop-types';
import PackageCard from './PackageCard';
import { Col } from 'antd';
import { StyledPackageTwoCard, StyledPackageTwoRow } from './index.styled';

const PackageTwo = ({ pricing }) => {
  return (
    <StyledPackageTwoCard title='Pricing Package Style 2'>
      <StyledPackageTwoRow>
        {pricing.map((data, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <PackageCard pricing={data} />
          </Col>
        ))}
      </StyledPackageTwoRow>
    </StyledPackageTwoCard>
  );
};

export default PackageTwo;

PackageTwo.propTypes = {
  pricing: PropTypes.array,
};
