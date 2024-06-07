import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledSalesStateCard = styled(AppCard)`
  position: relative;

  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledSalesStateMain = styled.div`
  margin-top: auto;
`;

export const StyledSalesStateSubTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: -12px;
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    text-align: left;

    [dir='rtl'] & {
      text-align: right;
    }
  }
`;

export const StyledReactPieChart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    align-items: flex-start;
  }
`;

export const StyledSalesStateContent = styled.div`
  width: 100%;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > div {
    width: 100%;
  }
`;

export const StyledSalesStateItem = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 24px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 24px;
    }
  }

  & .ant-avatar {
    height: 50px;
    width: 50px;
    min-width: 50px;
    margin-right: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }
`;

export const StyledSalesStateItemContent = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};
  overflow: hidden;
  width: calc(100% - 66px);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: calc(100% - 76px);
  }

  & h3 {
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 2px;
    font-size: 18px;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  & p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
