import styled from 'styled-components';

export const StyledProduct = styled.div`
  position: relative;
  padding-left: 28px;
  padding-right: 28px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 60px;
  }

  & .product-img img {
    width: 100%;
  }
  & .product-grid:nth-of-type(odd) .product-img {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-top: 25px;
    }
  }
`;
