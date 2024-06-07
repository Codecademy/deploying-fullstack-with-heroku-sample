import styled from 'styled-components';

export const StyledSlickBasicContainer = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    max-height: 260px;
    min-height: 250px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-height: 320px;
    min-height: 310px;
  }
`;

export const StyledSlickWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    height: 100%;
    width: 100%;
    display: block;
    border-radius: 10px;
  }
`;
