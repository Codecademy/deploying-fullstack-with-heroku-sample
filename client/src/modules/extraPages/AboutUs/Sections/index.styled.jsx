import { Typography } from 'antd';
import styled from 'styled-components';

export const StyledPrimarySubTitle = styled(Typography.Title)`
  font-size: 16px;
  margin-bottom: 10px !important;
`;

export const StyledSecDesc = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 8px;
`;
