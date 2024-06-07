import styled from 'styled-components';

export const StyledPopConfirmPlacement = styled.div`
  & .ant-btn {
    margin-right: 8px;
    margin-bottom: 8px;
    width: 70px;
    text-align: center;
    padding: 0;
  }
`;

export const StyledPopConfirmLeft = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    margin-left: 6px !important;
  }
`;

export const StyledPopConfirmRight = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    margin-left: 225px !important;
  }
`;
