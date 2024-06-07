import React from 'react';
import { CheckOutlined, HeartFilled } from '@ant-design/icons';
import { List } from 'antd';
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

const PackageCard = ({ pricing }) => {
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
            <span>${pricing.price}</span>
            /month
          </StyledPricingOneCardHeaderSubtitle>
          {pricing.popular ? (
            <div className='popular'>
              <HeartFilled />
              <p style={{}}>{pricing.popular}</p>
            </div>
          ) : null}
        </StyledPricingOneCardHeader>
        <StyledPricingOneBtnView>
          <StyledPricingOneBtn style={{ borderColor: pricing.tagColor }}>
            Start Trial
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
  pricing: PropTypes.object,
};
