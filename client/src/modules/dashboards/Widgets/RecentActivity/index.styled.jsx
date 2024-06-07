import AppScrollbar from '@crema/components/AppScrollbar';
import styled from 'styled-components';

export const StyledRecentActivityScrollbar = styled(AppScrollbar)`
  height: 295px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    height: 342px;
  }
`;
