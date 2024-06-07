import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
import CoinDropdown from './CoinDropdown';
import CurrencyField from './CurrencyField';
import { StyledTabWrapper } from './index.styled';

const TabForm = (props) => {
  const { coinList, type } = props;

  const [selectedCoinId, setSelectedCoinID] = React.useState(coinList[0].id);
  const [usdValue, setUsdValue] = useState(0);
  const [coinValue, setCoinValue] = useState(0);

  useEffect(() => {
    setUsdValue(0.258 * selectedCoin().usdPrice);
    setCoinValue(0.258);
  }, [selectedCoinId]);

  const selectedCoin = () => {
    return coinList.find((coin) => coin.id === selectedCoinId);
  };
  const handleCoinChange = (value) => {
    setSelectedCoinID(value);
  };

  const coin = selectedCoin();

  return (
    <StyledTabWrapper>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <CoinDropdown
          coinList={coinList}
          selectedCoinId={selectedCoinId}
          handleCoinChange={handleCoinChange}
        />
      </div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <CurrencyField
          label={<IntlMessages id='dashboard.crypto.usdAmount' />}
          shortName='USD'
          value={usdValue}
          coinColor='#16C784'
          onChange={(value) => {
            setUsdValue(value);
            setCoinValue(value / coin.usdPrice);
          }}
        />
      </div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <CurrencyField
          label={coin.coinName}
          value={coinValue}
          hideUSD
          shortName={coin.shortName}
          onChange={(value) => {
            setCoinValue(value);
            setUsdValue(value * coin.usdPrice);
          }}
          coinColor={coin.coinColor}
        />
      </div>
      <Button
        style={{
          minHeight: 46,
          width: '100%',
        }}
        type='primary'
      >
        {type === 'buy' ? 'Buy' : 'Sell'} {coin.shortName}
      </Button>
    </StyledTabWrapper>
  );
};

export default TabForm;

TabForm.defaultProps = {
  data: {
    value: '',
    price: '',
    amount: '',
  },
};

TabForm.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
  coinList: PropTypes.array,
};
