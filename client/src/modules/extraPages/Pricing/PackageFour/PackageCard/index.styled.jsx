import { Button, Card, List } from 'antd';
import styled from 'styled-components';

export const StyledPricingFourCard = styled(Card)`
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  overflow: hidden;

  & .ant-card-body {
    padding: 0;
  }
`;

export const StyledPricingFourContent = styled.div`
  padding: 20px;
`;

export const StyledPricingFourHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const StyledPricingFourCardCircle = styled.div`
  width: 149px;
  height: 149px;
  padding: 10px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 0;
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  & .price {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 26px;
    line-height: 1;
  }

  & h5 {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    margin-bottom: 0;
  }
`;

export const StyledPricingFourCardList = styled(List)`
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};

  & li {
    padding: 14px 0 !important;
    justify-content: flex-start;
    color: ${({ theme }) => theme.palette.text.primary};
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor} !important;

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

export const StyledPricingFourBtnView = styled.div`
  margin-top: 10px;
`;

export const StyledPricingFourBtn = styled(Button)`
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
