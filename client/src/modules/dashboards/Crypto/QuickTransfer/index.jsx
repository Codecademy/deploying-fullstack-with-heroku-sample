import React, { useState } from 'react';
import AppCard from '@crema/components/AppCard';
import RecentContact from './RecentContact';
import PropTypes from 'prop-types';
import AppScrollbar from '@crema/components/AppScrollbar';
import CoinDropdown from './CoinDropdown';
import { useIntl } from 'react-intl';
import {
  StyledAmountTag,
  StyledAmountWrapper,
  StyledCoinInput,
  StyledCoinWrapper,
  StyledFlexWrapper,
  StyledRecentContact,
  StyledSecondaryText,
} from './index.styled';
import { Button } from 'antd';

const QuickTransfer = ({ quickTransfer }) => {
  const [selectedCoinId, setSelectedCoinID] = useState(
    quickTransfer.coinList[0].id,
  );

  const selectedCoin = () => {
    return quickTransfer.coinList.find((coin) => coin.id === selectedCoinId);
  };
  const handleCoinChange = (value) => {
    setSelectedCoinID(value);
  };
  const coin = selectedCoin();
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.crypto.quickTransfer']}
      extra={
        <CoinDropdown
          coinList={quickTransfer.coinList}
          selectedCoinId={selectedCoinId}
          handleCoinChange={handleCoinChange}
        />
      }
    >
      <StyledCoinWrapper>
        <StyledCoinInput style={{ padding: '14px 0' }} />
        <StyledAmountTag>Amount {coin.shortName}</StyledAmountTag>
      </StyledCoinWrapper>
      <StyledAmountWrapper>
        <StyledSecondaryText>Recent Contact</StyledSecondaryText>
        <AppScrollbar>
          <StyledFlexWrapper>
            {quickTransfer.recentContact.map((contact, index) => (
              <StyledRecentContact key={index}>
                <RecentContact recentContact={contact} />
              </StyledRecentContact>
            ))}
          </StyledFlexWrapper>
        </AppScrollbar>
      </StyledAmountWrapper>
      <div
        style={{
          textAlign: 'right',
        }}
      >
        <Button type='primary'>TRANSFER NOW</Button>
      </div>
    </AppCard>
  );
};

export default QuickTransfer;

QuickTransfer.propTypes = {
  quickTransfer: PropTypes.object.isRequired,
};
