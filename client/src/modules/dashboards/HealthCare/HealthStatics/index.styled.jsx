import { ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  & .statics-graph-color {
    stop-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
