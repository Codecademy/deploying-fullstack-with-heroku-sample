import React from 'react';
import AppCircularProgress from '@crema/components/AppCircularProgress';
import { RightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import {
  StyledTopSellingCell,
  StyledTopSellingCellAction,
  StyledTopSellingCellActionIcon,
  StyledTopSellingCellActionInfo,
  StyledTopSellingCellContent,
  StyledTopSellingCellImg,
  StyledTopSellingCellInfo,
  StyledTopSellingPrice,
} from './index.styled';

const ProductCell = ({ data }) => {
  return (
    <StyledTopSellingCell key={data.id} className='item-hover'>
      <StyledTopSellingCellInfo>
        <StyledTopSellingCellImg alt='' src={data.icon} />

        <StyledTopSellingCellContent>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <StyledTopSellingPrice>${data.price}</StyledTopSellingPrice>
        </StyledTopSellingCellContent>
      </StyledTopSellingCellInfo>

      <StyledTopSellingCellAction>
        <AppCircularProgress
          strokeColor={data.color}
          trailColor='rgb(214, 214, 214)'
          percent={70}
          size='small'
          format={() => <span />}
        />
        <StyledTopSellingCellActionInfo>
          <div>
            <p>Sales</p>
            <span>{data.rate}%</span>
          </div>
          <StyledTopSellingCellActionIcon>
            <RightOutlined />
          </StyledTopSellingCellActionIcon>
        </StyledTopSellingCellActionInfo>
      </StyledTopSellingCellAction>
    </StyledTopSellingCell>
  );
};

export default ProductCell;

ProductCell.propTypes = {
  data: PropTypes.object,
};
