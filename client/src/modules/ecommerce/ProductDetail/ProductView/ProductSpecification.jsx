import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col } from 'antd';
import {
  StyledProductDetailItemTitle,
  StyledProductDetailSpecification,
} from './index.styled';
import PropTypes from 'prop-types';

const ProductSpecification = ({ productSpec }) => {
  return (
    <StyledProductDetailSpecification>
      <StyledProductDetailItemTitle>Specification</StyledProductDetailItemTitle>
      <AppRowContainer>
        {productSpec.map((data, index) => (
          <React.Fragment key={index}>
            <Col xs={8}>
              <p className='text-secondary'> {data.title}</p>
            </Col>
            <Col xs={16}>
              <p> {data.desc}</p>
            </Col>
          </React.Fragment>
        ))}
      </AppRowContainer>
    </StyledProductDetailSpecification>
  );
};

export default ProductSpecification;

ProductSpecification.propTypes = {
  productSpec: PropTypes.array,
};
