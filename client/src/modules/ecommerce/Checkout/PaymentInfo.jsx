import React, { useState } from 'react';
import AppCard from '@crema/components/AppCard';
import { Button, Input, Radio } from 'antd';
import {
  StyledCheckoutCardTitle,
  StyledPaymentInfoItem,
  StyledPayModeContent,
  StyledPayModeFormField,
  StyledPayRadioMode,
} from './index.styled';

const PaymentInfo = () => {
  const [paymentMode, setPaymentMode] = useState('CARD');
  return (
    <AppCard
      title={<StyledCheckoutCardTitle>Payment Info</StyledCheckoutCardTitle>}
      actions={<Button type='primary'>Place Order</Button>}
    >
      <StyledPaymentInfoItem>
        <StyledPayRadioMode onClick={() => setPaymentMode('COD')}>
          <Radio checked={paymentMode === 'COD'}>COD</Radio>
        </StyledPayRadioMode>
        {paymentMode === 'COD' ? (
          <StyledPayModeContent>
            <p>Cash on delivery</p>
          </StyledPayModeContent>
        ) : null}
      </StyledPaymentInfoItem>
      <StyledPaymentInfoItem>
        <StyledPayRadioMode onClick={() => setPaymentMode('CARD')}>
          <Radio checked={paymentMode === 'CARD'}>CARD</Radio>
        </StyledPayRadioMode>
        {paymentMode === 'CARD' ? (
          <StyledPayModeContent>
            <div className='form-field'>
              <Input id='user-name' placeholder='Full Name' type='search' />
            </div>
            <div className='form-field'>
              <Input id='card-number' placeholder='Card Number' type='search' />
            </div>
            <StyledPayModeFormField>
              <div className='form-field'>
                <Input
                  id='expiry-date'
                  placeholder='Expiry Date (MM/YY)'
                  type='search'
                />
              </div>
              <div className='form-field'>
                <Input id='card-cvv' placeholder='CVV' type='password' />
              </div>
            </StyledPayModeFormField>
          </StyledPayModeContent>
        ) : null}
      </StyledPaymentInfoItem>
      <StyledPaymentInfoItem>
        <StyledPayRadioMode onClick={() => setPaymentMode('PAYPAL')}>
          <Radio checked={paymentMode === 'PAYPAL'}>PAYPAL</Radio>
        </StyledPayRadioMode>
        {paymentMode === 'PAYPAL' ? (
          <StyledPayModeContent>
            <div className='form-field'>
              <Input
                id='paypal-email'
                placeholder='PayPal email address'
                type='search'
              />
            </div>
          </StyledPayModeContent>
        ) : null}
      </StyledPaymentInfoItem>
    </AppCard>
  );
};

export default PaymentInfo;
