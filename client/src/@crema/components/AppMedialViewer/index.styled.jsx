import { Modal } from 'antd';
import styled from 'styled-components';

export const StyledEmbedResponsive = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    padding-top: 30%;
  }

  & embed,
  & iframe,
  & object,
  & video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const StyledAppMediaModal = styled(Modal)`
  position: relative;
  min-height: 100vh;
  width: 100vw !important;
  max-width: 100%;
  margin: 0;
  top: 0;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;

  & .ant-modal-content {
    background-color: transparent;
    border-radius: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  & .ant-modal-body {
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  & .ant-modal-close {
    color: white;
  }
`;

export const StyledMediaViewer = styled.div`
  position: relative;
  background-color: rgb(49, 53, 65);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledMedialCarousel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

  & .slick-track {
    display: flex;
    align-items: center;
  }

  & .slick-slide {
    text-align: center;
    position: relative;

    & img {
      width: auto !important;
      max-height: 96vh;
      height: auto !important;
    }

    & > * {
      position: relative;
      z-index: 9;
    }
  }

  & .slick-dots {
    bottom: 10px;
  }

  & .slick-dots li button:before,
  & .slick-dots li.slick-active button:before {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }

  & .slick-next {
    right: 0;

    [dir='rtl'] & {
      right: auto;
      left: 0;
    }
  }

  & .slick-prev {
    left: 0;

    [dir='rtl'] & {
      left: auto;
      right: 0;
    }
  }
`;
