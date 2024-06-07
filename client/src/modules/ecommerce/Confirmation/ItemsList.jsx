import React from 'react';
import AppList from '@crema/components/AppList';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Avatar, Col } from 'antd';
import {
  StyledConfirmationActionBtn,
  StyledConfirmationActionBtnView,
  StyledConfirmationActionPara,
  StyledConfirmationListCard,
  StyledConfirmationListItem,
  StyledConfirmationListItemAction,
  StyledConfirmationListItemContent,
} from './index.styled';
import { getTotalPrice } from './helper';

const ItemsList = ({ cartItems }) => {
  return (
    <StyledConfirmationListCard>
      <AppRowContainer>
        <Col xs={24} sm={12}>
          <AppList
            delay={200}
            data={cartItems}
            renderItem={(data) => (
              <StyledConfirmationListItem key={data.id} className='item-hover'>
                <Avatar size={40} src={data.product.image} />
                <StyledConfirmationListItemContent>
                  <h3>
                    {data.product.title} ({data.count})
                  </h3>
                  <p>Brand: {data.product.brand}</p>
                </StyledConfirmationListItemContent>
              </StyledConfirmationListItem>
            )}
          />
        </Col>

        <Col xs={24} sm={12}>
          <StyledConfirmationListItemAction>
            <h3>Total ${getTotalPrice(cartItems)}</h3>
            <StyledConfirmationActionBtnView>
              <StyledConfirmationActionBtn className='btn-secondary'>
                Cancel
              </StyledConfirmationActionBtn>
              <StyledConfirmationActionBtn type='primary'>
                Need Help
              </StyledConfirmationActionBtn>
            </StyledConfirmationActionBtnView>
            <StyledConfirmationActionPara>
              <img src={'/assets/images/ecommerce/cart-icon.png'} alt='cart' />
              Delivery expected by 27 Jul
            </StyledConfirmationActionPara>
          </StyledConfirmationListItemAction>
        </Col>
      </AppRowContainer>
    </StyledConfirmationListCard>
  );
};

export default ItemsList;

ItemsList.propTypes = {
  cartItems: PropTypes.array,
};
