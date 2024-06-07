import styled from "styled-components";

export const StyledProductImageSlide = styled.div`
  position: relative;
`;

export const StyledProductImageSlideRoot = styled.div`
  position: relative;
  display: flex;
`;

export const StyledProductFav = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  font-size: 20px;
  cursor: pointer;

  [dir="rtl"] & {
    right: auto;
    left: 10px;
  }
`;

export const StyledProductImageSlideAction = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 20px;

    [dir="rtl"] & {
      padding-left: 0;
      padding-right: 20px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 60px;

    [dir="rtl"] & {
      padding-left: 0;
      padding-right: 60px;
    }
  }
`;
