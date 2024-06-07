import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import {
  StyledPricingThreeBtn,
  StyledPricingThreeBtnView,
  StyledPricingThreeCard,
  StyledPricingThreeCardList,
  StyledPricingThreeCardValue,
  StyledPricingThreeContent,
  StyledPricingThreeTitle,
} from './index.styled';

const PackageCard = ({ pricing }) => {
  return (
    <StyledPricingThreeCard>
      <StyledPricingThreeContent>
        <StyledPricingThreeTitle>{pricing.title}</StyledPricingThreeTitle>
        <StyledPricingThreeCardList>
          {pricing.pricingList.map((data, index) => (
            <List.Item key={index}>
              <CheckOutlined className='icon' />
              <p>{data.title}</p>
            </List.Item>
          ))}
        </StyledPricingThreeCardList>
        <StyledPricingThreeCardValue>
          <h3>
            <span className='price'>${pricing.price}</span>
            /month
          </h3>
        </StyledPricingThreeCardValue>
      </StyledPricingThreeContent>
      <StyledPricingThreeBtnView>
        <StyledPricingThreeBtn style={{ backgroundColor: pricing.priceColor }}>
          Get started
        </StyledPricingThreeBtn>
      </StyledPricingThreeBtnView>
    </StyledPricingThreeCard>
  );
};

export default PackageCard;

PackageCard.propTypes = {
  pricing: PropTypes.object,
};
