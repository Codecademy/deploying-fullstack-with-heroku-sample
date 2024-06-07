import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledCoinInfoRow = styled.div`
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 4px;
  }
`;

export const StyledCoinInfoCol = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-top: 12px;
  }

  & h3 {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 0;
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledTotalBalanceCard = styled(AppCard)`
  color: ${({ theme }) => theme.palette.text.secondary};
  height: auto;

  & .ant-card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const StyledTotalBalanceHeader = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 28px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 32px;
    flex-direction: row;
    align-items: center;
  }

  & .ant-column {
    // margin-bottom: 5px;
  }
`;

export const StyledTotalBalanceTitle = styled.h3`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 20px;
  margin-bottom: 0;
`;

export const StyledTotalBalanceTitleSm = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};
  white-space: nowrap;
`;

export const StyledTotalContentBalanceView = styled.div`
  display: flex;
  align-items: flex-start;

  & .btn {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-transform: uppercase;
    width: 96px;
    font-size: ${({ theme }) => theme.font.size.base};
    border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
    /* height: auto; */
    line-height: 1;

    &:not(:first-child) {
      margin-left: 10px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }

  & .btn-white {
    background-color: white;
    color: black;
    border-color: white;

    &:hover,
    &:focus {
      background-color: white;
      border-color: white;
      color: black;
    }
  }
`;

export const StyledTotalBalanceMiddlePara = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: uppercase;
`;

export const StyledTotalBalanceFooter = styled.div`
  position: relative;
`;
