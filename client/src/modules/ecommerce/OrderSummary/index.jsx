import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import AppPageMeta from '@crema/components/AppPageMeta';
import {
  StyledOrderSummaryItem,
  StyledSummaryOrderDivider,
} from './index.styled';
import AppAnimate from '@crema/components/AppAnimate';

const getTotalPrice = (cartItems) => {
  let total = 0;
  cartItems.map((data) => {
    total = total + +data.price.mrp * +data.count;
    return data;
  });
  return total;
};

const getTotalDiscount = (cartItems) => {
  let total = 0;
  cartItems.map((data) => {
    total = total + +data.price.discount * +data.count;
    return data;
  });
  return total;
};

const OrderSummary = ({ cartItems }) => {
  const { messages } = useIntl();
  const totalPrice = getTotalPrice(cartItems);
  const totalDiscount = getTotalDiscount(cartItems);
  return (
    <AppAnimate animation='transition.slideRightIn' delay={200}>
      <AppCard title={messages['ecommerce.orderSummary']}>
        <AppPageMeta title='Order Summery' />
        <StyledOrderSummaryItem>
          <p>Grand Total: </p>
          <span>${totalPrice}</span>
        </StyledOrderSummaryItem>
        <StyledOrderSummaryItem>
          <p>Discount: </p>
          <span>${totalDiscount}</span>
        </StyledOrderSummaryItem>
        <StyledOrderSummaryItem>
          <p>Shipping Charge: </p>
          <span>$4</span>
        </StyledOrderSummaryItem>
        <StyledOrderSummaryItem>
          <p>Estimated Tax: </p>
          <span>$0</span>
        </StyledOrderSummaryItem>

        <StyledSummaryOrderDivider />

        <StyledOrderSummaryItem>
          <p>Order Total: </p>
          <span>${totalPrice - totalDiscount + 4}</span>
        </StyledOrderSummaryItem>
      </AppCard>
    </AppAnimate>
  );
};

export default OrderSummary;

OrderSummary.propTypes = {
  cartItems: PropTypes.array,
};
