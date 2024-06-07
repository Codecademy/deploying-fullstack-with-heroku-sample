import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledBadgeRoot,
  StyledFlex,
  StyledFlexContainer,
  StyledFlexContainer2,
  StyledFlexWrapper,
  StyledSecondary,
} from './index.styled';
import { Avatar, Rate, Typography } from 'antd';

const BestSellersCell = ({ bestSeller }) => {
  return (
    <StyledFlex className='item-hover'>
      <Avatar
        size={44}
        style={{
          marginRight: 16,
        }}
        src={bestSeller.profile_pic}
      />
      <StyledFlexWrapper>
        <div style={{ marginRight: 12 }}>
          <Typography.Title level={5} style={{ marginBottom: 2, fontSize: 14 }}>
            {bestSeller.name}
          </Typography.Title>
          <StyledSecondary>{bestSeller.weekDate}</StyledSecondary>
        </div>
        <StyledFlexContainer>
          <StyledFlexContainer2>
            <Rate
              style={{
                fontSize: 18,
              }}
              disabled
              defaultValue={bestSeller.rating}
              allowHalf
            />
          </StyledFlexContainer2>
          <StyledBadgeRoot>{bestSeller.sales}</StyledBadgeRoot>
        </StyledFlexContainer>
      </StyledFlexWrapper>
    </StyledFlex>
  );
};

export default BestSellersCell;

BestSellersCell.propTypes = {
  bestSeller: PropTypes.object.isRequired,
};
