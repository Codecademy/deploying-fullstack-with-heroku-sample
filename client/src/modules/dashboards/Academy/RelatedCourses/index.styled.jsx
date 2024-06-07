import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledRelatedCourseSlider = styled(Slider)`
  padding-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-left: -12px;
    margin-right: -12px;
  }

  & .slick-slide {
    & img {
      height: auto;
      border-radius: 2 * ${({ theme }) => theme.sizes.borderRadius.base};
    }
  }

  & .slick-prev,
  & .slick-next {
    top: -25px;

    &:before {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }

  & .slick-prev {
    right: 32px;
    left: auto;

    [dir='rtl'] & {
      right: auto;
      left: 32px;
    }
  }

  & .slick-next {
    right: 10px;

    [dir='rtl'] & {
      right: 0;
      left: 10px;
    }
  }
`;

export const StyledRelatedCourseItem = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-left: 12px;
    padding-right: 12px;
  }

  & h4 {
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 8px;
  }
`;

export const StyledRelatedCourseThumb = styled.div`
  margin-bottom: 8px;

  & img {
    width: 100%;
  }
`;

export const StyledRelatedCourseAction = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.palette.text.secondary};

  & > :first-child {
    margin-right: 12px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledCourseView = styled.div`
  display: flex;
  align-items: center;

  & span:first-child {
    margin-right: 8px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;
