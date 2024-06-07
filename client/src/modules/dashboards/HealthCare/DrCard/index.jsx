import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDrCard,
  StyledDrCardContent,
  StyledDrCardContentMain,
  StyledDrCardInfo,
  StyledDrThumb,
  StyledDrTime,
} from './index.styled';

const DrCard = ({ data }) => {
  const { bgColor, icon, time, category, name } = data;

  return (
    <StyledDrCard
      heightFull
      style={{ backgroundColor: bgColor }}
      className='card-hover'
    >
      <StyledDrCardInfo>
        <StyledDrThumb>
          <img src={icon} alt='icon' />
        </StyledDrThumb>
        <StyledDrCardContent>
          <StyledDrCardContentMain>
            <h5 className='text-truncate'>{category}</h5>
            <p className='text-truncate'>{name}</p>
          </StyledDrCardContentMain>
          <StyledDrTime>{time}</StyledDrTime>
        </StyledDrCardContent>
      </StyledDrCardInfo>
    </StyledDrCard>
  );
};

export default DrCard;

DrCard.propTypes = {
  data: PropTypes.object,
};
