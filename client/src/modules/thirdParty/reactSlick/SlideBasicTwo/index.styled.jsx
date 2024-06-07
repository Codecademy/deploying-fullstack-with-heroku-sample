import { Typography } from 'antd';
import styled from 'styled-components';

export const StyledSlide2Wrapper = styled.div`
  box-shadow: none;
  border: 1px solid #e8e5dd;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 24px;

  & .slick-slide img {
    display: block;
    width: 100%;
  }
  & .slick-dots {
    bottom: 0;

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
`;

export const StyledSlide2Item = styled.div`
  position: relative;
`;

export const StyledSlick2Wrapper = styled.div`
  position: relative;

  & img {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
      max-height: 220px;
      min-height: 210px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      max-height: 320px;
      min-height: 310px;
    }
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const StyledSlide2ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledHeading = styled(Typography.Title)`
  font-size: 16px !important;
  margin-bottom: 12px !important;
`;
