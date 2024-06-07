import React from 'react';
import PropTypes from 'prop-types';
import { StyledDayTempItem } from './index.styled';

const DayTemperature = (props) => {
  const { day } = props;

  return (
    <StyledDayTempItem>
      <p>{day.day}</p>
      <span>
        <img src={day.image} alt='weather' />
      </span>
    </StyledDayTempItem>
  );
};

export default DayTemperature;

DayTemperature.propTypes = {
  day: PropTypes.object.isRequired,
};
