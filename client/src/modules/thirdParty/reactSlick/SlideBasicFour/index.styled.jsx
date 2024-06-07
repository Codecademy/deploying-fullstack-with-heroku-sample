import { Typography } from 'antd';
import styled from 'styled-components';

export const StyledSlide4Wrapper = styled.div`
  & .slick-slider {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
      padding-bottom: 20px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding-bottom: 0;
    }
  }
  & .slick-slide img {
    display: inline-block;
  }
  & .slick-dots {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
      bottom: 0;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      bottom: auto;
      top: 0;
      left: 50%;
      padding-left: 20px;
      text-align: left;
    }
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

export const StyledSlide4ItemWrapper = styled.div`
  display: flex;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    flex-direction: column;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

export const StyledSlide4ItemContainer = styled.div`
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    max-height: 220px;
    min-height: 210px;
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    max-height: 280px;
    min-height: 270px;
    width: 50%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    max-height: 360px;
    min-height: 350px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    max-height: 340px;
    min-height: 330px;
  }
`;

export const StyledSlide4ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 10px;
  }
`;

export const StyledHeadingWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: 100%;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 50%;
    padding: 40px 32px 24px;
  }
`;

export const StyledAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & img {
    height: 40px;
    width: 40px;
  }
`;

export const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const StyledSecData = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledHeading = styled(Typography.Title)`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 24px;
`;

export const StyledHeadingSmall = styled(Typography.Title)`
  margin: 0 !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
  font-weight: ${({ theme }) => theme.font.weight.bold} !important;
`;
