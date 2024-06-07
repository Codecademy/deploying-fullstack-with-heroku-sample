import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledStatsAvatar,
  StyledStatsCard,
  StyledStatsContent,
  StyledStatsRow,
} from './index.styled';

const StatsCard = (props) => {
  const { icon, data, heading } = props;

  return (
    <StyledStatsCard className='card-hover'>
      <StyledStatsRow>
        <StyledStatsAvatar>
          <img src={icon} alt='icon' />
        </StyledStatsAvatar>
        <StyledStatsContent>
          <h3>{data.count}</h3>
          <p>{heading}</p>
        </StyledStatsContent>
      </StyledStatsRow>
    </StyledStatsCard>
  );
};

export default StatsCard;

StatsCard.defaultProps = {
  data: {
    count: '',
  },
};

StatsCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  data: PropTypes.object,
  heading: PropTypes.any.isRequired,
};
