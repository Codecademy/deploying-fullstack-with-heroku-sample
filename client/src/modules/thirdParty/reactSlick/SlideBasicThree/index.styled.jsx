import { Typography } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledSlide3Wrapper = styled.div`
  padding-bottom: 24px;
  height: 100%;

  & .slick-slider {
    padding-bottom: 20px;
    height: 100%;
  }
  & .slick-list,
  & .slick-track {
    height: 100%;
  }
  & .slick-slide {
    & > div {
      height: 100%;
    }
    & img {
      display: block;
      width: 100%;
      border-radius: 10px;
    }
  }
  & .slick-dots {
    bottom: -10px;
    & li {
      width: 10px;
      height: 10px;

      & button {
        width: 10px;
        height: 10px;
        padding: 0;

        &::before {
          font-size: 0;
          background-color: ${({ theme }) => theme.palette.primary.main};
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }
    }
  }
  & .slick-prev,
  & .slick-next {
    background-color: ${({ theme }) => theme.palette.white};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex !important;
    align-items: center;
    justify-content: center;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.palette.white};
    }

    &::before {
      color: ${({ theme }) => theme.palette.black};
      font-size: 0;
      background-image: url('/assets/images/arrow-prev.svg');
      background-repeat: no-repeat;
      background-position: center center;
      width: 20px;
      height: 20px;
      display: block;
      margin-right: 8px;
    }
  }
  & .slick-next {
    right: 15px;
    z-index: 1;

    &::before {
      background-image: url('/assets/images/arrow-next.svg');
      margin-left: 6px;
      margin-right: 0;
    }
  }

  & .slick-prev {
    left: 15px;
    z-index: 1;
  }
`;

export const StyledSlide3ItemWrapper = styled.div`
  position: relative;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    max-height: 100%;
    min-height: 250px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-height: 320px;
    min-height: 100%;
  }
`;

export const StyledSlick3Wrapper = styled.div`
  position: relative;
  height: 100%;

  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const StyledHeadingWrapper = styled.div`
  position: absolute;
  padding: 12px 16px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.palette.black, 0.65)};
`;

export const StyledHeading = styled(Typography.Title)`
  color: ${({ theme }) => theme.palette.white} !important;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 24px;
`;
