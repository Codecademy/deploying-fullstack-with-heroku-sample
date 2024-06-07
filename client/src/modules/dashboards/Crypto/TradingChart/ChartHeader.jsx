import React from "react";
import crypto from "@crema/mockapi/fakedb/dashboard/crypto";
import CurrencyCell from "../BuySell/CurrencyCell";
import {
  StyledCoinsWrapper,
  StyledFlex,
  StyledSecondaryText,
  StyledTitle,
} from "./index.styled";
import { Select } from "antd";

const ChartHeader = () => {
  return (
    <StyledFlex>
      <StyledCoinsWrapper>
        <Select value={1}>
          {crypto.buySell.coinList.map((coin) => {
            return CurrencyCell(coin);
          })}
        </Select>
      </StyledCoinsWrapper>
      <StyledCoinsWrapper>
        <StyledTitle level={3}>$ 41.580</StyledTitle>
        <StyledSecondaryText>Low Price</StyledSecondaryText>
      </StyledCoinsWrapper>
      <StyledCoinsWrapper>
        <StyledTitle
          level={3}
          style={{
            color: "#11C15B",
          }}
        >
          $ 41.580
        </StyledTitle>
        <StyledSecondaryText>High Price</StyledSecondaryText>
      </StyledCoinsWrapper>
      <StyledCoinsWrapper>
        <StyledTitle level={3}>$ 41.580</StyledTitle>
        <StyledSecondaryText>24H Volume</StyledSecondaryText>
      </StyledCoinsWrapper>
      <StyledCoinsWrapper>
        <StyledTitle
          style={{
            color: "#F60002",
          }}
        >
          $ 41.580
        </StyledTitle>
        <StyledSecondaryText>24H Change</StyledSecondaryText>
      </StyledCoinsWrapper>
    </StyledFlex>
  );
};

export default ChartHeader;
