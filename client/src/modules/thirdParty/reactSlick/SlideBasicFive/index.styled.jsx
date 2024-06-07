import styled from 'styled-components';

export const StyledSlideBasic5Wrapper = styled.div`
  box-shadow: none;
  border: 1px solid #e8e5dd;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 24px;

  & .slick-slider {
    padding-bottom: 20px;
  }
  & .slick-slide img {
    display: block;
    width: 100%;
  }
  & .slick-dots {
    bottom: 0;
    padding-left: 24px;
    text-align: left;

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

export const StyledSlidePos = styled.div`
  position: relative;
`;

export const StyledSlidePosSpace = styled.div`
  position: relative;
  padding-bottom: 32px;
`;

export const StyledSlide5ItemWrapper = styled.div`
  position: relative;
  max-height: 160px;
  min-height: 150px;

  & img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

export const StyledSlide5Img = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StyledSlideThumbnailWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 16px;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.palette.white};

  & img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`;

export const StyledSlideTitleWrapper = styled.div`
  padding: 12px 16px;
`;
