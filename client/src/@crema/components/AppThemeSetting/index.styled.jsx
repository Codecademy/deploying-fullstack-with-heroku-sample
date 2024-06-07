import { Button, Drawer, Switch } from 'antd';
import styled from 'styled-components';

export const StyledCustomizerOption = styled.div`
  position: fixed;
  right: 0;
  top: 85px;
  z-index: 9;

  [dir='rtl'] & {
    right: auto;
    left: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    top: 125px;
  }
`;

export const StyledCustomizerButton = styled(Button)`
  display: block;
  border-radius: 30px 0 0 30px !important;
  background-color: ${({ theme }) => theme.palette.orange[5]};
  color: white;
  box-shadow: none;
  border: 0 none;
  height: 46px !important;
  width: 46px !important;
  padding: 10px;
  margin-bottom: 5px;

  [dir='rtl'] & {
    border-radius: 0 30px 30px 0;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.orange[6]};
    color: white;
    border-radius: 30px 0 0 30px;

    [dir='rtl'] & {
      border-radius: 0 30px 30px 0;
    }
  }

  & i {
    font-size: 24px;
  }
`;

export const StyledCustomizeDrawer = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    width: 300px !important;

    @media screen and (min-width: ${({ theme }) =>
        theme.breakpoints.xxl - 200}px) {
      width: 400px !important;
    }
  }

  & .ant-drawer-body {
    padding: 0;
  }
`;

export const StyledCustomizedHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 28px 22px;
  }

  & h3 {
    margin-bottom: 2px;
    font-size: 18px;
  }

  & p {
    margin-bottom: 0;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledCustomizedMain = styled.div`
  padding: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 28px 22px;
  }
`;

export const StyledCustomizedItem = styled.div`
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
    padding-bottom: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      padding-bottom: 30px;
      margin-bottom: 30px;
    }
  }

  & h4 {
    margin-bottom: 8px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-bottom: 12px;
    }
  }
`;

export const StyledCustomizedSwitchView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h4 {
    margin-bottom: 0;
  }
`;

export const StyledCustomizedSwitch = styled(Switch)`
  position: relative;
`;

export const StyledCustomizeNavOption = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;
export const StyledCustomizeNavOptionItem = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
`;

export const StyledCustomizeNavOptionContent = styled.div`
  position: relative;
  cursor: pointer;

  & .layout-img {
    width: 72px;
  }
`;
export const StyledCustomizeNavOptionRightIcon = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
`;

export const StyledColorOptionListItem = styled.div`
  padding: 0 5px;
  margin-bottom: 10px;
`;

export const StyledCustomColorOption = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  height: 40px;
  width: 50px;
`;

export const StyledCustomColorOptionRightIcon = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledColorWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const StyledColorHeadingWrapper = styled.div`
  padding: 8px 10px;
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const StyledColorCheckboxWrapper = styled.div`
  margin-left: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #fff;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledColorBodyWrapper = styled.div`
  padding: 10px;
`;

export const StyledColorBody = styled.div`
  height: 80px;
  padding: 6px 10px;
  margin-bottom: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const StyledColorBodyColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 4px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-left: auto;

  & svg {
    font-size: 16px;
  }
`;

export const StyledColorTitle = styled.div`
  padding: 8px 12px 8px;
`;
