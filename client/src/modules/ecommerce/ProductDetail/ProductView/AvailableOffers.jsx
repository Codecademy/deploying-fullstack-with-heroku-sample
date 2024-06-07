import React from 'react';
import { CalendarOutlined, TagOutlined } from '@ant-design/icons';
import {
  StyledAvailableOfferItemIcon,
  StyledAvailableOfferItemInner,
  StyledAvailableOfferPara,
  StyledProductDetailAvailableOffer,
  StyledProductDetailAvailableOfferItem,
  StyledProductDetailItemTitle,
} from './index.styled';

const AvailableOffers = () => {
  return (
    <StyledProductDetailAvailableOffer>
      <StyledProductDetailItemTitle>
        Available offers
      </StyledProductDetailItemTitle>

      <StyledProductDetailAvailableOfferItem>
        <StyledAvailableOfferItemIcon>
          <TagOutlined style={{ fontSize: 16 }} />
        </StyledAvailableOfferItemIcon>
        <StyledAvailableOfferItemInner>
          <StyledAvailableOfferPara>
            Special PriceGet extra ₹598 off (price inclusive of discount)
          </StyledAvailableOfferPara>
          <span>T&C</span>
        </StyledAvailableOfferItemInner>
      </StyledProductDetailAvailableOfferItem>

      <StyledProductDetailAvailableOfferItem>
        <StyledAvailableOfferItemIcon>
          <CalendarOutlined style={{ fontSize: 16 }} />
        </StyledAvailableOfferItemIcon>
        <StyledAvailableOfferItemInner>
          <StyledAvailableOfferPara>
            No cost EMI ₹1,368/month. Standard EMI also available
          </StyledAvailableOfferPara>
          <span>View Plans</span>
        </StyledAvailableOfferItemInner>
      </StyledProductDetailAvailableOfferItem>
    </StyledProductDetailAvailableOffer>
  );
};

export default AvailableOffers;
