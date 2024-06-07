import AppCard from '@crema/components/AppCard';
import { PieChart } from 'recharts';
import styled from 'styled-components';

export const StyledEarningMonthCategories = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 20px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 20px;
    }
  }
`;
export const StyledEarningMonthCategoriesItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 12px;
  padding-right: 12px;

  & .dot {
    padding: 4px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      height: 16px;
      width: 16px;
    }
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-left: 12px;
    text-transform: uppercase;
    margin-bottom: 0;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 12px;
    }
  }
`;

export const StyledEarningMonthGraph = styled(PieChart)`
  width: 260px !important;
  height: 260px !important;
  align-self: center;

  & .recharts-surface {
    width: 260px !important;
    height: 260px !important;
  }
`;

export const StyledEarningMonthCard = styled(AppCard)`
  & .ant-card-actions {
    padding: 8px 20px 16px;
    border-top: 0 none;
    background-color: transparent;

    & li {
      margin: 0;
    }
  }
`;

export const StyledEarningMonthGraphView = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
