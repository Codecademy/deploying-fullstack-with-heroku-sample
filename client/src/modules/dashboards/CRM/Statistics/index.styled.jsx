import styled from 'styled-components';
import { Tabs } from 'antd';

export const StyledStatisticsContent = styled.div`
  width: 100%;
`;

export const StyledStatisticsHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
    align-items: center;
  }

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 0;
  }
`;

export const StyledStatisticsHeaderAction = styled.div`
  position: relative;
  z-index: 2;

  & .select-box {
    margin-left: 0;
    margin-right: 8px;
    margin-top: 5px;

    [dir='rtl'] & {
      margin-left: 8px;
      margin-right: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-left: auto;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: auto;
    }

    & .select-box {
      margin-left: 8px;
      margin-right: 0;
      margin-top: 0;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 8px;
      }
    }
  }
`;

export const StyledStatisticTab = styled(Tabs)`
  flex: 1;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-top: -24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-top: -26px;
  }

  & .ant-tabs-tab {
    text-transform: capitalize;
    padding-bottom: 12px;
    padding-top: 0;
    margin-left: 8px;
    margin-right: 8px;
    font-size: ${({ theme }) => theme.font.size.base};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-left: 14px;
      margin-right: 14px;
    }
  }

  & .ant-tabs-nav::before {
    display: none;
  }

  & .ant-tabs-nav .ant-tabs-nav-wrap {
    justify-content: center;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding-left: 86px;
      padding-right: 180px;

      [dir='rtl'] & {
        padding-left: 180px;
        padding-right: 86px;
      }
    }
  }
`;
