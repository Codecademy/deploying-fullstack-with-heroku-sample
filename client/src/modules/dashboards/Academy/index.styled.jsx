import { Col } from 'antd';
import styled from 'styled-components';

export const StyledAcaNotificationRoot = styled(Col)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    order: 3;
  }
`;

export const StyledMyCourseRoot = styled(Col)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    order: 2;
  }
`;
