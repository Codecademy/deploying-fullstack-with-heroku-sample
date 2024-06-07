import React from 'react';
import PropTypes from 'prop-types';
import { green, red } from '@ant-design/colors';
import {
  StyledCoinStatsAvatar,
  StyledCoinStatsCard,
  StyledCoinStatsContent,
  StyledCoinStatsContentAvatar,
  StyledCoinStatsRow,
} from './index.styled';

const CoinStats = (props) => {
  const { icon, bgColor, data, heading } = props;

  return (
    <StyledCoinStatsCard className='card-hover'>
      <StyledCoinStatsRow>
        <StyledCoinStatsAvatar
          src={icon}
          style={{ backgroundColor: bgColor }}
        />

        <StyledCoinStatsContent>
          <p>{heading}</p>

          <StyledCoinStatsContentAvatar>
            <h3>${data.price}</h3>
            <span style={{ color: data.increment > 0.0 ? green[5] : red[5] }}>
              {data.increment}%
            </span>
          </StyledCoinStatsContentAvatar>
        </StyledCoinStatsContent>
      </StyledCoinStatsRow>
    </StyledCoinStatsCard>
  );
};

export default CoinStats;

CoinStats.defaultProps = {
  bgColor: '',
  data: {
    price: '',
    increment: null,
  },
};

CoinStats.propTypes = {
  bgColor: PropTypes.string,
  icon: PropTypes.string,
  data: PropTypes.object,
  heading: PropTypes.any.isRequired,
};
