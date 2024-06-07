import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';

export const StyledGoalProgressContent = styled.div`
  margin-top: 20px;
  margin-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.base};
  justify-content: space-between;

  & .dot {
    margin-right: 8px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      height: 16px;
      width: 16px;
    }
  }
`;

export const StyledGoalChart = styled(ResponsiveContainer)`
  height: 320px !important;
`;
