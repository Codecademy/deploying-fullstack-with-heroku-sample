import styled from 'styled-components';

export const StyledSendMessage = styled.div`
  max-width: 500px;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 28px;
  }
`;

export const StyledSendMessageTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 20px;
  }
`;
