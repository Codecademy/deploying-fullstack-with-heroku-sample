import { Button } from 'antd';
import styled from 'styled-components';

export const StyledAppBoundary = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  & img {
    fill: ${({ theme }) => theme.palette.primary.main};
    width: 100%;
    max-width: 400px;
  }
`;

export const StyledSomethingWentWrong = styled.h2`
  font-size: 30px;
  margin-top: 16px;
`;

export const StyledTextWrapper = styled.p`
  font-size: 18px;
  margin-top: 12px;
`;

export const StyledErrorBtn = styled(Button)`
  margin-top: 16px;
`;
