import { Button, Card, List } from 'antd';
import styled from 'styled-components';

export const StyledPricingTwoCard = styled(Card)`
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};

  & .ant-card-body {
    padding: 0;
  }
`;

export const StyledPricingTwoCardHeader = styled.div`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

  & :last-child {
    margin-bottom: 0;
  }
`;
export const StyledPricingTwoCardHeaderTitle = styled.h5`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.lg};
  margin-bottom: 16px;
`;

export const StyledPricingTwoCardValue = styled.div`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
`;

export const StyledPricingTwoCardPricingValue = styled.div`
  margin-bottom: 16px;

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.text.secondary};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: 18px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      font-size: 20px;
    }
  }

  & .dollar {
    display: inline-block;
    vertical-align: top;
  }

  & .price {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 26px;
    line-height: 1;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      font-size: 44px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      font-size: 54px;
    }
  }
`;

export const StyledPricingTwoCardContent = styled.div`
  padding: 20px;
`;

export const StyledPricingTwoCardList = styled(List)`
  position: relative;

  & li {
    padding: 0 !important;
    margin-bottom: 16px;
    justify-content: flex-start;
    border-bottom: 0 none !important;

    & .icon {
      margin-right: 14px;
      font-size: 16px;
      color: ${({ theme }) => theme.palette.secondary.main};
      margin-top: 4px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 14px;
      }
    }

    & p {
      margin-bottom: 0;
    }
  }
`;

export const StyledPricingTwoCardBtnView = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const StyledPricingTwoCardBtn = styled(Button)`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  min-width: 150px;
  border-radius: 30px;
`;
