import React from 'react';
import PropTypes from 'prop-types';
import { StyledCoinInfoCol, StyledCoinInfoRow } from './index.styled';

const CoinsInfo = ({ coins }) => {
  return (
    <StyledCoinInfoRow>
      {coins.map((coin) => {
        return (
          <StyledCoinInfoCol key={coin.id}>
            <h3>{coin.value}</h3>
            <p>{coin.name}</p>
          </StyledCoinInfoCol>
        );
      })}
    </StyledCoinInfoRow>
  );
};

export default CoinsInfo;

CoinsInfo.defaultProps = {
  coins: [],
};

CoinsInfo.propTypes = {
  coins: PropTypes.array,
};
