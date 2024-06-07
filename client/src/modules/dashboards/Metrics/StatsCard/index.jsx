import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledMetricsStatsAvatar,
  StyledMetricsStatsCard,
} from './index.styled';

const StatsCard = ({ icon, bgColor, text, value }) => {
  return (
    <StyledMetricsStatsCard heightFull>
      <StyledMetricsStatsAvatar
        src={<img src={icon} alt='' />}
        style={{ backgroundColor: bgColor }}
      />
      <p>{text}</p>
      <h3>{value}</h3>
    </StyledMetricsStatsCard>
  );
};

export default StatsCard;

StatsCard.defaultProps = {
  bgColor: '',
  value: '',
};

StatsCard.propTypes = {
  text: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
};
