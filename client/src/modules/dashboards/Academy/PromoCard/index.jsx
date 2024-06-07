import React from 'react';
import { Button } from 'antd';
import {
  StyledPromoCard,
  StyledPromoContent,
  StyledPromoThumb,
} from './index.styled';

const PromoCard = () => {
  return (
    <StyledPromoCard heightFull>
      <StyledPromoContent>
        <StyledPromoThumb>
          <img src={'/assets/images/dashboard/academy/promo.png'} alt='promo' />
        </StyledPromoThumb>
        <h3>Do you want to get</h3>
        <p>Better results?</p>
        <div>
          <Button className='btn' size='small'>
            Upgrade
          </Button>
        </div>
      </StyledPromoContent>
    </StyledPromoCard>
  );
};

export default PromoCard;
