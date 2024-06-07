import { Card } from 'antd';
import styled from 'styled-components';

export const StyledGridCard = styled(Card)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    & .ant-card-grid {
      width: 100% !important;
    }
  }
`;
