import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledBirthdayCard,
  StyledBirthdayContent,
  StyledBirthdayHeader,
  StyledBirthThumb,
} from './index.styled';

const BirthdayCard = () => {
  return (
    <StyledBirthdayCard heightFull className='no-card-space'>
      <StyledBirthdayHeader>
        <h3>Sunday, 07 July 1991</h3>
      </StyledBirthdayHeader>
      <StyledBirthdayContent>
        <StyledBirthThumb>
          <img src={'/assets/images/cakeicon.png'} alt='cake' />
        </StyledBirthThumb>
        <p>
          <IntlMessages id='dashboard.antonBirthday' />
        </p>
      </StyledBirthdayContent>
    </StyledBirthdayCard>
  );
};

export default BirthdayCard;
