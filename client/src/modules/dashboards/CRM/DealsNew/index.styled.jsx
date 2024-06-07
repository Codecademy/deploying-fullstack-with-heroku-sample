import { Typography } from 'antd';
import styled from 'styled-components';

export const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled(Typography.Title)`
  font-weight: ${({ theme }) => theme.font.weight.medium};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-right: 16px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-right: 20px;
  }
`;

export const StyledProgress = styled.span`
  padding: 5px 14px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  min-width: 85px;
  text-align: center;
`;
