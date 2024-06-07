import styled from 'styled-components';

export const StyledSubscription = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    text-align: right;

    [dir='rtl'] & {
      text-align: left;
    }
  }
`;
