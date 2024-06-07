import { Button, Card, List } from 'antd';
import styled from 'styled-components';

export const StyledPricingThreeCard = styled(Card)`
  box-shadow: none;
  border: 0 none;
  background-color: rgba(0, 0, 0, 0.9);
  color: ${({ theme }) => theme.palette.primary.contrastText};
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: -25px;
    z-index: 1;
    height: 55px;
    width: calc(100% + 30px);
    background-color: hsla(0, 0%, 100%, 0.1);
    transform: rotate(10deg);

    [dir='rtl'] & {
      left: auto;
      right: 0;
    }
  }

  & .ant-card-body {
    padding: 0;
  }
`;

export const StyledPricingThreeContent = styled.div`
  padding: 20px;
`;

export const StyledPricingThreeTitle = styled.h5`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 30px;
  }
`;

export const StyledPricingThreeCardList = styled(List)`
  position: relative;

  & li {
    padding: 0 !important;
    margin-bottom: 16px;
    justify-content: flex-start;
    border-bottom: 0 none !important;
    color: ${({ theme }) => theme.palette.primary.contrastText} !important;

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

export const StyledPricingThreeCardValue = styled.div`
  margin-top: 30px;

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.primary.contrastText};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: 18px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      font-size: 20px;
    }
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

export const StyledPricingThreeBtnView = styled.div`
  margin-top: 10px;
`;

export const StyledPricingThreeBtn = styled(Button)`
  width: 100%;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  min-height: 46px;
  border-radius: 0;
  box-shadow: none;
  border: 0 none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
