import { Button, Card, Drawer } from 'antd';
import styled from 'styled-components';
import AppScrollbar from '../AppScrollbar';
import { rgba } from 'polished';

export const StyledAppContentContainer = styled(AppScrollbar)`
  display: flex;
  flex-direction: column;
  height: calc(100% - 56px) !important;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: calc(100% - 64px) !important;
  }

  &.fullView {
    height: 100% !important;
  }

  & .scrum-absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    [dir='rtl'] & {
      left: auto;
      right: 0;
    }
  }

  & .react-trello-board {
    height: 100%;
    background-color: ${({ theme }) =>
      theme.palette.background.paper} !important;
    & > div {
      height: 100%;
    }
  }

  & .scrum-row,
  & .react-trello-board > div > .smooth-dnd-container.horizontal {
    display: inline-flex;
    min-width: 100%;
    height: 100%;
    margin-left: -10px;
    margin-right: -10px;
  }

  & .scrum-col,
  & .react-trello-board .smooth-dnd-container .react-trello-lane {
    min-width: 280px;
    max-width: 280px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: ${({ theme }) => theme.cardRadius};
    background-color: ${() => rgba('white', 0.45)};
    height: 100% !important;
    min-height: 100%;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      min-width: 354px;
      max-width: 354px;
    }
  }

  &
    .react-trello-board
    .smooth-dnd-container
    .react-trello-lane
    > div:not(.scrum-board-list-header-card) {
    align-self: normal;
    overflow: hidden;
    max-height: none;
  }

  & .scroll-scrum-item {
    height: auto !important;
  }

  & .react-trello-board .smooth-dnd-container.vertical {
    overflow-y: auto;
    height: calc(100% - 72px);
  }
`;

export const StyledAppFooter = styled.div`
  padding: 8px 24px;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
`;

export const StyledAppsHeader = styled.div`
  padding: 4px 24px;
  min-height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    min-height: 64px;
  }
`;

export const StyledAppSidebar = styled.div`
  height: 100%;
  display: none;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.background.paper};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 17.5rem;
    display: flex;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 17.5rem;
  }
`;

export const StyledAppSidebarDrawer = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    width: 17.5rem !important;
  }

  & .ant-drawer-body {
    padding: 0;
  }
`;

export const StyledAppSidebarCard = styled(Card)`
  display: none;
  height: 100%;
  border: 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  & .ant-card-body {
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const StyledAppWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const StyledAppWrapHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
  }

  & h2 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
    margin-bottom: 0;
  }
`;

export const StyledMenuBtn = styled(Button)`
  display: block;
  margin-right: 8px;
  padding: 0;
  background-color: transparent;
  box-shadow: none;
  border: 0 none;
  width: 35px;
  height: 35px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: none;
  }

  & .anticon {
    font-size: 20px;
  }
`;

export const StyledAppContainer = styled.div`
  display: flex;
  height: calc(100vh - 138px);

  .appMainFixedFooter & {
    height: calc(100vh - 184px) !important;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: calc(100vh - 161px);

    .appMainFixedFooter & {
      height: calc(100vh - 207px);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    height: calc(100vh - 165px);

    .appMainFixedFooter & {
      height: calc(100vh - 211px);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    height: calc(100vh - 153px);

    .appMainFixedFooter &,
    .appMainFooter & {
      height: calc(100vh - 199px);
    }
  }
`;

export const StyledMainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: calc(100% - 17.5rem);
    padding-left: 32px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 32px;
    }
  }

  &.appsMainContentFull {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      width: 100%;
      padding-left: 0;

      [dir='rtl'] & {
        padding-right: 0;
      }
    }
  }
`;

export const StyledMainContentCard = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;

  & > .ant-card-body {
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
