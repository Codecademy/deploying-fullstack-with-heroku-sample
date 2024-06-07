import AppCard from '@crema/components/AppCard';
import { ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

export const StyledCancelVisitCard = styled(AppCard)`
  overflow: hidden;
`;

export const StyledCancelVisitContent = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

export const StyledCancelVisitNumber = styled.span`
  margin-right: 8px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledCancelVisitsGraph = styled.div`
  margin: 0 -20px -20px;
`;

export const StyledCancelVisitsIcon = styled.span`
  & img {
    height: 12px;
  }
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  .cancel-visits-graph-color {
    stop-color: ${({ theme }) => theme.palette.secondary.main};
  }

  .cancel-visits-stroke-color {
    stroke: ${({ theme }) => theme.palette.secondary.main};
  }
`;
