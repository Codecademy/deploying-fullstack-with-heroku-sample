import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import { StyledProductCell, StyledProductCellContent } from './index.styled';

const ProductCell = ({ data }) => {
  return (
    <StyledProductCell key={data.id} className='item-hover'>
      <Avatar alt='' src={data.icon} />

      <StyledProductCellContent>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <p className='price'>
          ${data.price}
          <span style={{ textDecoration: 'line-through' }}>${data.mrp}</span>
        </p>
      </StyledProductCellContent>
    </StyledProductCell>
  );
};

export default ProductCell;

ProductCell.propTypes = {
  data: PropTypes.object,
};
