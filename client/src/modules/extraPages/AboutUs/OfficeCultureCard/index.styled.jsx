import { Typography } from 'antd';
import styled from 'styled-components';

export const StyledTitle = styled(Typography.Title)`
  font-size: 16px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 8px !important;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 16px !important;
  }
`;

export const StyledOfcDesc = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 8px;
`;
