import styled from 'styled-components';
import { Steps } from 'antd';

export const StyledAntStepsHor = styled(Steps)`
  &.ant-steps-horizontal {
    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.sm - 1}px) {
      flex-direction: column;
    }
  }
`;
