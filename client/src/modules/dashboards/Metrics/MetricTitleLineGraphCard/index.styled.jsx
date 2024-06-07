import AppCard from '@crema/components/AppCard';
import { LineChart } from 'recharts';
import styled from 'styled-components';

export const StyledMetricTitleLineGraphCard = styled(AppCard)`
  position: relative;
  overflow: hidden;

  & h3 {
    margin-bottom: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

export const StyledMetricTitleLineGraphView = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 0;
  }

  & h2 {
    margin-bottom: 0;
    margin-right: 12px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 24px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: 30px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 36px;
    }
  }
`;

export const StyledMetricTitleLineGraphAction = styled.p`
  position: relative;
  margin-bottom: 0;

  & span {
    margin-right: 4px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 4px;
    }
  }
`;

export const StyledMetricTitleLineGraph = styled.div`
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledMetricTitleLineGraphRoot = styled(LineChart)`
  margin-bottom: 8px;
`;
