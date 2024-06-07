import React from 'react';
import PopularCoinsTable from './PopularCoinsTable';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { StyledPopularCoinCard } from './index.styled';

const PopularCoins = (props) => {
  const { popularCoins } = props;
  const { messages } = useIntl();

  return (
    <StyledPopularCoinCard
      className='no-card-space-ltr-rtl'
      heightFull
      title={messages['dashboard.popularCoins']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <PopularCoinsTable popularCoins={popularCoins} />
    </StyledPopularCoinCard>
  );
};

export default PopularCoins;

PopularCoins.defaultProps = {
  popularCoins: [],
};

PopularCoins.propTypes = {
  popularCoins: PropTypes.array,
};
