import { Button, Input } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

const { Search } = Input;

export const StyledProductHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const StyledProductHeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 12px;
  overflow: hidden;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: calc(100% - 262px);
  }

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-right: 12px;
    margin-bottom: 0;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }
  }
`;

export const StyledProductHeaderShowingText = styled.span`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;

export const StyledProductHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledProductHeaderSearch = styled(Search)`
  position: relative;
  max-width: 120px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 16px;
    max-width: 165px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  & .ant-input {
    padding: 8px 14px;
    height: 36px;
  }

  & .ant-input-search-button {
    height: 36px;
    width: 36px;
    box-shadow: none;

    & .anticon svg {
      display: block;
    }
  }
`;

export const StyledProductHeaderBtn = styled(Button)`
  border: 0 none;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  width: 40px;
  height: 40px;
  padding: 10px;
  font-size: 20px;

  &:hover,
  &:focus {
    background-color: ${() => rgba('black', 0.1)};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover,
    &:focus {
      background-color: ${() => rgba('black', 0.2)};
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
