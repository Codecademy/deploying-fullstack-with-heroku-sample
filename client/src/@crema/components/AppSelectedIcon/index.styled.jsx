import styled from 'styled-components';

export const StyledAppSelectedIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.palette.text.primary};
  color: ${({ color }) => color};

  .anticon {
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : 'transparent'};
    color: ${(props) =>
      props.color ? props.color : props.theme.palette.background.paper};
  }

  &.isCenter {
    right: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  & svg {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;
