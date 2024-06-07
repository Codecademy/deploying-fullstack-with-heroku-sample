import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import CurrencyCell from './CurrencyCell';
import { StyledSelect } from './index.styled';

const CoinDropdown = ({ handleCoinChange, coinList, selectedCoinId }) => {
  return (
    <StyledSelect
      value={selectedCoinId}
      placeholder={<IntlMessages id='dashboard.crypto.coinName' />}
      onChange={handleCoinChange}
    >
      {coinList.map((coin) => {
        return CurrencyCell(coin);
      })}
    </StyledSelect>
  );
};

export default CoinDropdown;

CoinDropdown.propTypes = {
  style: PropTypes.object,
  selectedCoinId: PropTypes.number,
  handleCoinChange: PropTypes.func,
  coinList: PropTypes.array,
};
