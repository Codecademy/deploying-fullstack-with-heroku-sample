import React from 'react';
import TabForm from './TabForm';
import PropTypes from 'prop-types';
import { StyledBuyCellCard, StyledTabs } from './index.styled';

const BuySell = ({ buySell }) => {
  const items = [
    {
      label: 'Buy',
      key: '1',
      children: <TabForm coinList={buySell.coinList} type='buy' />,
    }, // remember to pass the key prop
    {
      label: 'Sell',
      key: '2',
      children: <TabForm coinList={buySell.coinList} type='sell' />,
    },
  ];
  return (
    <StyledBuyCellCard style={{ padding: 0 }} heightFull>
      <StyledTabs centered defaultActiveKey='1' items={items} />
    </StyledBuyCellCard>
  );
};

export default BuySell;

BuySell.defaultProps = {
  buySell: {
    buyData: {
      value: '',
      price: '',
      amount: '',
    },
    sellData: {
      value: '',
      price: '',
      amount: '',
    },
  },
};

BuySell.propTypes = {
  buySell: PropTypes.object,
};
