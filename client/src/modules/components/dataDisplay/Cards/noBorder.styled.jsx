import { Card } from 'antd';
import styled from 'styled-components';

export const StyledNoBorderCard = styled(Card)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    width: 260px !important;
  }
`;

export const StyledSiteCardBorderlessWrapper = styled.div`
  padding: 30px;
  background: #ececec;
`;
