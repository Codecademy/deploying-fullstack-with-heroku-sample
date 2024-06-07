import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledSimilarProductSlideView = styled.div`
  position: relative;
  background-color: ${({ theme }) =>
    rgba(theme.palette.background.default, 0.6)};
  padding-bottom: 25px;

  & .slick-prev,
  & .slick-next {
    display: none !important;
  }

  & .slick-slide {
    cursor: pointer;

    & .ant-card {
      margin: 8px;
      border: 0 none;
      overflow: hidden;
    }

    & .ant-card-body {
      padding: 20px;
    }
  }
`;
