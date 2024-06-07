import React from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import PropTypes from 'prop-types';
import { StyledProduct } from './index.styled';
import { Col } from 'antd';

const Product = ({ product }) => {
  return (
    <StyledProduct>
      <AppRowContainer>
        {product.map((product, index) => (
          <Col xs={24} sm={12} md={6} key={index} className='product-grid'>
            <div className='product-img'>
              <img src={product.srcImg} alt='Product' />
            </div>
          </Col>
        ))}
      </AppRowContainer>
    </StyledProduct>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.array,
};
