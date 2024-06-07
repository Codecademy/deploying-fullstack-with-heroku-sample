import styled from 'styled-components';

export const StyledSlideMediaWrapper = styled.div`
  & .slick-slider {
    padding-bottom: 20px;
  }
  & .slick-slide img {
    display: block;
    width: 100%;
    border-radius: 10px;
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
