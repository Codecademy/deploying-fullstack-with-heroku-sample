import { Button } from 'antd';
import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledIconBtn = styled(Button)`
  border: 0 none;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: transparent !important;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) =>
      rgba(theme.palette.black, 0.05)} !important;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover,
    &:focus {
      background-color: ${({ theme }) =>
        rgba(theme.palette.black, 0.05)} !important;
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  & svg {
    display: block;
    font-size: 18px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 20px;
    }
  }
`;
