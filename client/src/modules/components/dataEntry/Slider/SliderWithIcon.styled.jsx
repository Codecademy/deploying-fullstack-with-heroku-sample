import styled from 'styled-components';

export const StyledIconWrapper = styled.div`
  position: relative;
  padding: 0px 30px;
  width: 100%;

  & .ant-slider {
    margin: 0;
  }

  & .anticon {
    position: absolute;
    top: -2px;
    width: 16px;
    height: 16px;
    color: rgba(0, 0, 0, 0.25);
    font-size: 16px;
    line-height: 1;

    &:first-child {
      left: 0;
    }

    &:last-child {
      right: 0;
    }
  }

  & .icon-wrapper-active {
    color: rgba(0, 0, 0, 0.45);
  }
`;
