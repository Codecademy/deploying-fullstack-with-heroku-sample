import AppCard from '@crema/components/AppCard';
import { List } from 'antd';
import styled from 'styled-components';

export const StyledLatestNewsCard = styled(AppCard)`
  position: relative;
`;

export const StyledNewsList = styled(List.Item)`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 0 none !important;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  & h5 {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.secondary};

    & .text-primary {
      color: ${({ theme }) => theme.palette.primary.main};
      margin-left: 8px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 8px;
      }
    }
  }
`;

export const StyledNewsImg = styled.img`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 10rem;
  }
`;

export const StyledNewsListContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-right: 12px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-right: 20px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
    }
  }

  & p {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      margin-bottom: 0;
    }
  }
`;
