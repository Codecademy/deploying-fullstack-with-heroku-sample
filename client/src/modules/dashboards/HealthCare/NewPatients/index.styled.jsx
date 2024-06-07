import AppCard from '@crema/components/AppCard';
import { ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

export const StyledPatientCard = styled(AppCard)`
  overflow: hidden;
`;

export const StyledPatientsContent = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

export const StyledPatientsNumber = styled.span`
  margin-right: 8px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledPatientArrowIcon = styled.span`
  & img {
    height: 12px;
  }
`;

export const StyledPatientsGraph = styled.div`
  margin: 0 -20px -20px;
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  & .patients-graph-color {
    stop-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
