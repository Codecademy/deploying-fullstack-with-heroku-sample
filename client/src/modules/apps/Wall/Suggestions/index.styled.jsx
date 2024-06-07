import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledSuggestionCard = styled(AppCard)`
  position: relative;

  & .ant-card-actions {
    background-color: transparent;
  }
`;

export const StyledSuggestionAction = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledSuggestionItem = styled.div`
  padding: 8px 20px;
  display: flex;
`;

export const StyledSuggestionAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 50px;
    height: 50px;
    min-width: 50px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 70px;
    height: 70px;
    min-width: 70px;
  }
`;

export const StyledSuggestionItemContent = styled.div`
  margin-left: 14px;
  flex: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-left: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-left: 16px;
  }

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      margin-right: 16px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-right: 16px;
    }
  }

  & h4 {
    margin-bottom: 2px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 0;
  }
`;
