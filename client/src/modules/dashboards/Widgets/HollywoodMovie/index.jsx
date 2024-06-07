import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledHollywoodAvatar,
  StyledHollywoodContent,
  StyledHollywoodContentAction,
  StyledHollywoodFooter,
  StyledHollywordCard,
} from './index.styled';

const HollywoodMovie = () => {
  return (
    <StyledHollywordCard
      className='background-image'
      heightFull
      style={{
        backgroundImage: 'url(/assets/images/widgets/movie.png)',
      }}
    >
      <StyledHollywoodContent>
        <StyledHollywoodContentAction>
          <StyledHollywoodAvatar>
            <img src={'/assets/images/playbutton.png'} alt='play' />
          </StyledHollywoodAvatar>
        </StyledHollywoodContentAction>
        <StyledHollywoodFooter>
          <h1>
            <IntlMessages id='dashboard.hollywoodMovie' />
          </h1>
        </StyledHollywoodFooter>
      </StyledHollywoodContent>
    </StyledHollywordCard>
  );
};

export default HollywoodMovie;
