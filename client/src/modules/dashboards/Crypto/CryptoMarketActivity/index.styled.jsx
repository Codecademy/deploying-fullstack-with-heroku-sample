import AppCard from '@crema/components/AppCard';
import { ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

export const StyledCryptoMarketActivityCard = styled(AppCard)`
  position: relative;

  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledMarketFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 8px;
  margin-top: auto;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledMarketFooterAction = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: auto;
  }
`;

export const StyledMarketFooterActionItem = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }

  & .dot {
    margin-right: 12px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const StyledMarketFooterContent = styled.div`
  margin-top: 25px;
  font-size: ${({ theme }) => theme.font.size.base};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: auto;
    margin-top: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-left: auto;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: auto;
    }
  }
`;

export const StyledMarketFooterContentItem = styled.div`
  margin-right: 12px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.text.secondary};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;

export const StyledMarketFooterContentItemTitle = styled.h3`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 18px;
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: 0;
`;

export const StyledMarketGraph = styled(ResponsiveContainer)`
  height: 300px !important;
`;
