import AppCard from '@crema/components/AppCard';
import AppTableContainer from '@crema/components/AppTableContainer';
import styled from 'styled-components';

export const StyledPopularCoinCard = styled(AppCard)`
  position: relative;
`;

export const StyledPopularCoinUserInfo = styled.div`
  display: flex;
  align-items: center;

  & .ant-avatar {
    width: 40px;
    height: 40px;
    padding: 12px;
    margin-right: 14px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 14px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-right: 16px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 16px;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const StyledPopularCoinUserInfoContent = styled.div`
  flex: 1;

  & h3 {
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 13px;
  }
`;

export const StyledPopularCoinTable = styled(AppTableContainer)`
  & .ant-table-thead > tr > th {
    border-bottom: 0 none;
    font-size: 13px;
    padding: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;
      text-align: center;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }
  }

  & .ant-table-tbody > tr > td {
    border-bottom: 0 none;
    font-size: 13px;
    padding: 8px;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;
      text-align: center;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }
  }
`;
