import { Card } from 'antd';
import styled from 'styled-components';

export const StyledBasicCard = styled(Card)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    width: 260px !important;
  }
`;
