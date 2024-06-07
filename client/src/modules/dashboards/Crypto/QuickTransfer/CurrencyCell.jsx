import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Select } from 'antd';
import { StyledFlex, StyledText } from './index.styled';

const CurrencyCell = (coin) => {
  return (
    <Select.Option
      key={coin.id}
      value={coin.id}
      style={{
        cursor: 'pointer',
      }}
    >
      <StyledFlex>
        {coin.icon ? (
          <Avatar
            style={{
              marginRight: 5,
              height: 20,
              width: 20,
            }}
            src={coin.icon}
          />
        ) : (
          <Avatar
            style={{
              marginRight: 5,
              height: 20,
              width: 20,
            }}
          >
            {coin.name.toUpperCase()}
          </Avatar>
        )}
        <span>{coin.value}</span>
        <StyledText>{coin.shortName}</StyledText>
      </StyledFlex>
    </Select.Option>
  );
};

export default CurrencyCell;

CurrencyCell.propTypes = {
  coin: PropTypes.object,
};
