import styled from 'styled-components';

export const StyledMediaSlider = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 60px;
  }

  & .slick-slider {
    & .slick-prev,
    & .slick-next {
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
        width: 30px;
        height: 30px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
        width: 40px;
        height: 40px;
      }
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url('/assets/images/arrow-prev.svg');
      background-color: ${({ theme }) => theme.palette.white};
      border-radius: 50%;
      z-index: 3;
      padding: 4px;

      &:before {
        display: none;
      }
    }
    & .slick-prev {
      left: 25px;
      background-position-x: 46%;
    }

    & .slick-next {
      right: 25px;
      background-image: url('/assets/images/arrow-next.svg');
      background-position-x: 54%;
    }
  }
`;
