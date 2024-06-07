import styled from 'styled-components';

export const StyledSlideBasicWrapper = styled.div`
  & .slick-slider {
    padding-bottom: 20px;
  }
  & .slick-slide img {
    width: 100%;
    border-radius: 10px;
  }
  & .slick-dots {
    bottom: 0;

    & li {
      width: 10px;
      height: 10px;
      transition: all 0.4s ease;

      & button {
        width: 10px;
        height: 10px;
        padding: 0;
        transition: all 0.4s ease;

        &::before {
          font-size: 0;
          background-color: ${({ theme }) => theme.palette.primary.main};
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transition: all 0.4s ease;
        }
      }

      &.slick-active {
        width: 20px;
        & button {
          width: 20px;

          &::before {
            width: 20px;
            border-radius: 20px;
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
  }
`;
