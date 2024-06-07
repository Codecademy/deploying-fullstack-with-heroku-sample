import styled from 'styled-components';
import Slider from 'react-slick';
import { rgba } from 'polished';

export const StyledCityInfoSlider = styled(Slider)`
  position: relative;
  padding-bottom: 0;
  height: 100%;
  min-height: 250px;

  & .slick-list,
  & .slick-track,
  & .slick-slide > div {
    height: 100%;
  }

  & .slick-dots {
    bottom: 30px;
  }

  & .slick-dots li {
    margin-left: 6px;
    margin-right: 6px;
    width: auto;
    height: auto;
  }

  & .slick-dots li button {
    width: 10px;
    height: 10px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      width: 14px;
      height: 14px;
    }
  }

  & .slick-dots li button:before {
    color: transparent;
    border: ${({ theme }) => theme.sizes.borderRadius.base} 2px white;
    opacity: 1;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    width: 10px;
    height: 10px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      width: 14px;
      height: 14px;
    }
  }

  & .slick-dots li.slick-active button:before {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 0;
  }

  & .slick-prev {
    top: 32px;
    left: 36px;
    z-index: 3;

    [dir='rtl'] & {
      left: auto;
      right: 36px;
    }
  }

  & .slick-next {
    top: 32px;
    right: 36px;
    z-index: 3;

    [dir='rtl'] & {
      right: auto;
      left: 36px;
    }
  }
`;

export const StyledCityInfoSlide = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
`;

export const StyledCityInfoImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border-radius: ${({ theme }) => theme.cardRadius};

  [dir='rtl'] & {
    left: auto;
    right: 0;
  }
`;
export const StyledCityInfoImgContent = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 20px 20px 60px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: ${({ theme }) => theme.cardRadius};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    background-color: ${({ theme }) => rgba(theme.palette.tooltipBg, 0.45)};
    border-radius: inherit;
  }

  & > * {
    position: relative;
    z-index: 3;
  }

  & h3 {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;

export const StyledSliderImgContentAction = styled.div`
  margin-top: auto;

  & p {
    margin-bottom: 0;
  }
`;
