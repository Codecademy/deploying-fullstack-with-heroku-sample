import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledPremiumBrand = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 60px;
  }

  & > img {
    width: 100%;
    display: block;
  }

  & .premium-brand-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => rgba(theme.palette.black, 0.6)};
  }
`;

export const StyledTitlewrapper5 = styled.h5`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 16px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 18px;
  }
`;

export const StyledTitlewrapper2 = styled.h2`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 26px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 30px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 36px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 44px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    font-size: 50px;
  }
`;
