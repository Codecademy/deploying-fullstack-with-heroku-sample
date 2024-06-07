import React from 'react';
import PropTypes from 'prop-types';
import CurrencyCell from './CurrencyCell';
import { StyledSelect } from './index.styled';

const CoinDropdown = ({ handleCoinChange, coinList, selectedCoinId }) => {
  return (
    <StyledSelect defaultValue={selectedCoinId} onChange={handleCoinChange}>
      {coinList.map((coin) => {
        return CurrencyCell(coin);
      })}
    </StyledSelect>
  );
};

export default CoinDropdown;

CoinDropdown.propTypes = {
  selectedCoinId: PropTypes.number,
  handleCoinChange: PropTypes.func,
  coinList: PropTypes.array,
};
