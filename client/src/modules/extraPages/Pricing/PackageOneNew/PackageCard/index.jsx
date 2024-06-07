import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { List, Typography } from 'antd';
import PropTypes from 'prop-types';
import {
  StyledPricingOneBtn,
  StyledPricingOneBtnView,
  StyledPricingOneCard,
  StyledPricingOneCardHeader,
  StyledPricingOneCardHeaderSubtitle,
  StyledPricingOneCardHeaderTitle,
  StyledPricingOneCardList,
  StyledPricingWrapper,
} from './index.styled';

const PackageCard = ({ billingFormat, pricing }) => {
  return (
    <StyledPricingWrapper>
      <span
        className='tag'
        style={{
          backgroundColor: pricing.tagColor,
          color: 'white',
        }}
      >
        {pricing.tag}
      </span>
      <StyledPricingOneCard>
        <StyledPricingOneCardHeader>
          <StyledPricingOneCardHeaderTitle>
            {pricing.title}
          </StyledPricingOneCardHeaderTitle>
          <StyledPricingOneCardHeaderSubtitle>
            <span>${pricing.price}</span>/{billingFormat}
          </StyledPricingOneCardHeaderSubtitle>
          {pricing.popular ? (
            <div className='popular'>
              <img src='/assets/images/arrowleft.svg' alt='arrowleft' />
              <Typography.Text className='popularText'>
                {pricing.popular}
              </Typography.Text>
            </div>
          ) : null}
        </StyledPricingOneCardHeader>
        <StyledPricingOneBtnView>
          <StyledPricingOneBtn style={{ borderColor: pricing.tagColor }}>
            {pricing.btnText}
          </StyledPricingOneBtn>
        </StyledPricingOneBtnView>
        <StyledPricingOneCardList>
          {pricing.pricingList.map((data, index) => (
            <List.Item key={index}>
              <CheckOutlined className='icon' />
              <p>{data.title}</p>
            </List.Item>
          ))}
        </StyledPricingOneCardList>
      </StyledPricingOneCard>
    </StyledPricingWrapper>
  );
};

export default PackageCard;

PackageCard.propTypes = {
  billingFormat: PropTypes.string,
  pricing: PropTypes.object,
};
