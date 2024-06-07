import { Space } from 'antd';
import styled from 'styled-components';

export const StyledAdvancedTransfer = styled(Space)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    flex-direction: column;
    width: 100%;

    & .ant-space-item {
      width: 100%;
    }

    & .ant-transfer-list {
      width: 100% !important;
    }
  }
`;

export const StyledAntTransfer = styled.div`
  & .ant-transfer {
    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.sm - 1}px) {
      flex-direction: column;

      & .ant-transfer-operation {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
`;
