import React, { useCallback, useEffect, useState } from 'react';
import BitcoinGraph from './BitcoinGraph';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import {
  StyledBitcoinHeader,
  StyledBitcoinSelectBox,
  StyledBitcoinSelectOption,
  StyledBitcoinTabs,
  StyledBitcoinTitle,
} from './index.styled';

const Bitcoin = (props) => {
  const { coinGraphData } = props;

  const onGetCoinData = useCallback(
    (coin) => {
      switch (coin) {
        case 'Bitcoin': {
          return coinGraphData.bitcoin;
        }
        case 'Litecoin': {
          return coinGraphData.litecoin;
        }
        case 'Ripple': {
          return coinGraphData.ripple;
        }
        default:
          return coinGraphData.bitcoin;
      }
    },
    [coinGraphData],
  );

  const [coinType, setCoinType] = useState('Bitcoin');
  const [coinData, setCoinData] = useState(onGetCoinData(coinType));

  useEffect(() => {
    setCoinData(onGetCoinData(coinType));
  }, [coinType, onGetCoinData]);

  const handleSelectValue = (event) => {
    setCoinType(event.target.value);
  };

  const { messages } = useIntl();

  const items = [
    {
      label: 'Yearly',
      key: '1',
      children: <BitcoinGraph data={coinData.yearlyData} />,
    }, // remember to pass the key prop
    {
      label: 'Monthly',
      key: '2',
      children: <BitcoinGraph data={coinData.monthlyData} />,
    },
    {
      label: 'Weekly',
      key: '3',
      children: <BitcoinGraph data={coinData.weeklyData} />,
    },
    {
      label: 'Today',
      key: '4',
      children: <BitcoinGraph data={coinData.dailyData} />,
    },
  ];
  return (
    <AppCard>
      <StyledBitcoinHeader>
        <StyledBitcoinSelectBox value={coinType} onChange={handleSelectValue}>
          <StyledBitcoinSelectOption value='Bitcoin'>
            {messages['dashboard.bitcoin']}
          </StyledBitcoinSelectOption>
          <StyledBitcoinSelectOption value='Litecoin'>
            {messages['dashboard.litecoin']}
          </StyledBitcoinSelectOption>
          <StyledBitcoinSelectOption value='Ripple'>
            {messages['dashboard.ripple']}
          </StyledBitcoinSelectOption>
        </StyledBitcoinSelectBox>
        <StyledBitcoinTitle>
          <h3>$7280.45</h3>
          <span>0.8%</span>
        </StyledBitcoinTitle>
      </StyledBitcoinHeader>

      <StyledBitcoinTabs defaultActiveKey='1' items={items} />
    </AppCard>
  );
};

export default Bitcoin;

Bitcoin.defaultProps = {
  coinGraphData: {
    bitcoin: {
      yearlyData: [],
      monthlyData: [],
      weeklyData: [],
      dailyData: [],
    },
    litecoin: {
      yearlyData: [],
      monthlyData: [],
      weeklyData: [],
      dailyData: [],
    },
    ripple: {
      yearlyData: [],
      monthlyData: [],
      weeklyData: [],
      dailyData: [],
    },
  },
};

Bitcoin.propTypes = {
  coinGraphData: PropTypes.object,
};
