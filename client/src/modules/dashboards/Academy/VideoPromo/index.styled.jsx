import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Tabs } from 'antd';
import { lighten } from 'polished';

export const StyledVideoPromoCard = styled(AppCard)`
  position: relative;
  overflow: hidden;
`;

export const StyledReactPlayerView = styled.div`
  position: relative;
  margin: -20px -20px 0;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  width: 100% !important;
`;

export const StyledVideoPromo = styled.div`
  padding-top: 20px;
`;

export const StyledVideoPromoHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledVideoPromoHeaderContent = styled.div`
  flex: 1;
  margin-right: 8px;
  margin-bottom: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }

  & h3 {
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & p {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 0;

    & span:not(:first-child) {
      margin-left: 8px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 8px;
      }
    }

    & .text-primary {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
export const StyledBorderRightBefore = styled.span`
  position: relative;
  padding-right: 6px;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 6px;
  }

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 5px;
    width: 1px;
    height: 10px;
    background-color: ${({ theme }) => theme.palette.gray[400]};

    [dir='rtl'] & {
      right: auto;
      left: 0;
    }
  }
`;

export const StyledVideoPromoHeaderAction = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const StyledVideoPromoHeaderIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 1px solid ${() => lighten(0.9, 'black')};
  color: ${({ theme }) => lighten(0.1, theme.palette.text.primary)};
  border-radius: 5px;
  font-size: 20px;

  &.cloud {
    margin-left: 8px;
    background-color: ${() => lighten(0.9, 'black')};
    color: ${() => lighten(0.285, 'black')};

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }
`;

export const StyledVideoPromoTabs = styled(Tabs)`
  position: relative;

  & .ant-tabs-nav {
    margin-bottom: 0;
  }

  & .ant-tabs-tab {
    margin: 0;
    padding: 0;
  }

  & .ant-tabs-tab-btn {
    padding: 5px 10px;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    opacity: 0.7;
  }

  & .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.palette.text.secondary};
    opacity: 1;
  }

  & .ant-tabs-content-holder {
    display: none;
  }
`;

export const StyledVideoTabsContent = styled.div`
  padding: 16px 16px 8px;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: ${({ theme }) => theme.cardRadius};
  color: ${({ theme }) => theme.palette.text.secondary};

  & h4 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.font.size.base};
    margin-bottom: 8px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const StyledVideoTabsAction = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledVideoTabsActionLeft = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-right: auto;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: auto;
    }
  }

  & button {
    text-transform: uppercase;
  }

  & button + button {
    margin-left: 8px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }
`;

export const StyledVideoTabsActionRight = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  & .text-secondary {
    ${({ theme }) => theme.palette.primary.secondary};
    margin-left: 8px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }
`;
