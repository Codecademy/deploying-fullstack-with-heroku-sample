import { Card, Divider, Input } from 'antd';
import styled from 'styled-components';

import AppScrollbar from '@crema/components/AppScrollbar';

export const StyledKnowKbCard = styled(Card)`
  & .ant-card-body {
    padding: 20px;
  }

  & h5 {
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const StyledKnowKbScrollbar = styled(AppScrollbar)`
  margin-bottom: 20px;
  height: 130px;
`;

export const StyledKnowBadgeGroup = styled.div`
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledKnowSection = styled.div`
  margin-bottom: 8px;

  & h3 {
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      margin-bottom: 24px;
    }
  }
`;

export const StyledKnowSales = styled(StyledKnowSection)`
  margin-bottom: 16px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 40px;
  }
`;

export const StyledKnowBadge = styled.span`
  font-size: ${({ theme }) => theme.font.size.base};
  text-transform: uppercase;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  margin: 8px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding: 5px 12px;
`;

const { Search } = Input;
export const StyledKnowBase = styled.div`
  width: 100%;
`;

export const StyledKnowBaseHeader = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  & h2 {
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const StyledKnowSearch = styled(Search)`
  & .ant-btn {
    [dir='rtl'] & {
      border-radius: ${({ theme }) => theme.sizes.borderRadius.base} 0 0
        ${({ theme }) => theme.sizes.borderRadius.base} !important;
    }
  }

  & .ant-input-group .ant-input {
    height: 36px;
  }
`;

export const StyledKnowDivider = styled(Divider)`
  margin-top: 16px;
  margin-bottom: 16px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
