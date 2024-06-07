import { Menu } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledVerticalNav = styled(Menu)`
  padding-top: 8px;
  padding-bottom: 8px;

  & .ant-menu-submenu-title:active,
  & .ant-menu-item.ant-menu-item-selected,
  & .ant-menu-item:not(.ant-menu-item-selected):active {
    background-color: ${({ bgcolor }) => bgcolor} !important;
    color: ${({ color }) => color} !important;
  }

  &.ant-menu,
  & .ant-menu-sub.ant-menu-inline {
    background-color: inherit;
  }

  & .ant-menu-item-group-title {
    padding-left: 31px;
    padding-right: 12px;
    color: inherit;
    font-weight: 500;
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    [dir="rtl"] & {
      padding-left: 12px;
      padding-right: 31px;
    }
  }

  & .ant-menu-item-group-list .ant-menu-item,
  & .ant-menu-item-group-list .ant-menu-submenu-title {
    margin-top: 1px;
    margin-bottom: 1px;
    padding-left: 30px !important;
    padding-right: 12px;
    transition: all 0.3s ease;

    [dir="rtl"] & {
      padding-left: 12px !important;
      padding-right: 30px !important;
    }
  }

  & .ant-menu-item .ant-menu-item-icon + span,
  & .ant-menu-submenu-title .ant-menu-item-icon + span,
  & .ant-menu-item .anticon + span,
  & .ant-menu-submenu-title .anticon + span {
    margin-left: 16px;

    [dir="rtl"] & {
      margin-left: 0;
      margin-right: 16px;
    }
  }

  & .ant-menu-submenu .ant-menu-submenu-title,
  & .ant-menu-submenu-title > .ant-menu-title-content,
  & .ant-menu-item .ant-menu-title-content > a {
    display: flex;
    align-items: center;
    background-color: inherit;
    font-weight: 500;
  }

  & .ant-menu-submenu .ant-menu-submenu-title .ant-menu-submenu-arrow {
    color: inherit;
  }

  & .ant-menu-item-icon svg {
    display: block;
  }

  & .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  &
    .ant-menu-sub.ant-menu-inline
    > .ant-menu-submenu
    > .ant-menu-submenu-title {
    padding-left: 68px !important;

    [dir="rtl"] & {
      padding-left: 16px !important;
      padding-right: 68px !important;
    }
  }

  & .ant-menu-item .ant-menu-item-icon,
  & .ant-menu-submenu-title .ant-menu-item-icon,
  & .ant-menu-item .anticon,
  & .ant-menu-submenu-title .anticon {
    font-size: 20px;
  }

  &.ant-menu-rtl .ant-menu-item .ant-menu-item-icon,
  &.ant-menu-rtl .ant-menu-submenu-title .ant-menu-item-icon,
  &.ant-menu-rtl .ant-menu-item .anticon,
  &.ant-menu-rtl .ant-menu-submenu-title .anticon {
    margin-right: 0;
    margin-left: 0;
  }

  &.ant-menu.ant-menu-dark,
  &.ant-menu-dark .ant-menu-sub,
  &.ant-menu.ant-menu-dark .ant-menu-sub {
    color: inherit;
    background: none;
  }

  &.ant-menu-dark .ant-menu-item,
  &.ant-menu-dark .ant-menu-item-group-title,
  &.ant-menu-dark .ant-menu-item > a,
  &.ant-menu-dark .ant-menu-item > span > a {
    color: inherit;
  }

  &.ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon,
  &.ant-menu-dark .ant-menu-item-selected .anticon,
  &.ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon + span,
  &.ant-menu-dark .ant-menu-item-selected .anticon + span {
    color: inherit;
  }

  & .ant-menu-item a,
  &.ant-menu-light .ant-menu-item:hover,
  &.ant-menu-light .ant-menu-item-active,
  &.ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  &.ant-menu-light .ant-menu-submenu-active,
  &.ant-menu-light .ant-menu-submenu-title:hover {
    color: inherit;
  }

  &.ant-menu-inline-collapsed {
    width: auto;

    & .ant-menu-item-group-title {
      min-height: 0;
    }

    & .ant-menu-item-group-list .ant-menu-item,
    & .ant-menu-item-group-list .ant-menu-submenu-title {
      padding-left: 12px !important;
      padding-right: 12px !important;
      width: calc(100% - 16px);
      border-radius: 4px;
      margin-left: 8px;
      margin-right: 8px;

      [dir="rtl"] & {
        padding-left: 12px !important;
        padding-right: 12px !important;
      }
    }

    & .ant-menu-item .ant-menu-item-icon + span,
    & .ant-menu-submenu-title .ant-menu-item-icon + span,
    & .ant-menu-item .anticon + span,
    & .ant-menu-submenu-title .anticon + span {
      width: 0;
      margin: 0;
    }

    & > .ant-menu-item .ant-menu-item-icon,
    &
      > .ant-menu-item-group
      > .ant-menu-item-group-list
      > .ant-menu-item
      .ant-menu-item-icon,
    &
      > .ant-menu-item-group
      > .ant-menu-item-group-list
      > .ant-menu-submenu
      > .ant-menu-submenu-title
      .ant-menu-item-icon,
    & > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-item-icon,
    & > .ant-menu-item .anticon,
    &
      > .ant-menu-item-group
      > .ant-menu-item-group-list
      > .ant-menu-item
      .anticon,
    &
      > .ant-menu-item-group
      > .ant-menu-item-group-list
      > .ant-menu-submenu
      > .ant-menu-submenu-title
      .anticon,
    & > .ant-menu-submenu > .ant-menu-submenu-title .anticon {
      font-size: 20px;
    }
  }

  &.menu-rounded {
    & .ant-menu-item a {
      color: inherit;

      &:hover,
      &:focus {
        color: inherit;
      }
    }

    & .ant-menu-item:hover {
      & a:hover,
      & a:focus {
        color: inherit;
      }
    }

    & .ant-menu-item-active,
    & .ant-menu-submenu-title:hover {
      color: inherit;
      background-color: inherit;
    }

    & .ant-menu-submenu-open {
      & > .ant-menu-submenu-title {
        color: inherit;
      }
    }

    &.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow,
    &.ant-menu.ant-menu-dark
      .ant-menu-sub
      .ant-menu-submenu-title
      .ant-menu-submenu-arrow,
    &.ant-menu.ant-menu-dark
      .ant-menu-sub
      .ant-menu-submenu-title
      .ant-menu-submenu-arrow {
      opacity: 1;
      color: inherit;
    }

    & .ant-menu-sub.ant-menu-inline {
      background: none;
    }

    & .ant-menu-item {
      margin-left: 0;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }

    & .ant-menu-item-group-list .ant-menu-item,
    & .ant-menu-item-group-list .ant-menu-submenu-title,
    & .ant-menu.ant-menu-inline .ant-menu-item {
      width: calc(100% - 16px);
      margin-right: 16px;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;

      [dir="rtl"] & {
        margin-right: 0;
        margin-left: 16px;
        border-radius: 30px 0 0 30px;
      }
    }

    &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background: inherit;

      & a {
        color: inherit;

        &:hover,
        &:focus {
          color: inherit;
        }
      }
    }

    &
      .ant-menu-submenu:hover
      > .ant-menu-submenu-title
      > .ant-menu-submenu-expand-icon,
    &
      .ant-menu-submenu:hover
      > .ant-menu-submenu-title
      > .ant-menu-submenu-arrow {
      color: inherit;
    }

    & .ant-menu-submenu-selected {
      color: inherit;
    }

    &.ant-menu-vertical .ant-menu-item::after,
    &.ant-menu-vertical-left .ant-menu-item::after,
    &.ant-menu-vertical-right .ant-menu-item::after,
    &.ant-menu-inline .ant-menu-item::after {
      display: none;
    }

    & .ant-menu-submenu-arrow {
      color: inherit;

      &:before,
      &:after {
        color: inherit;
        width: 8px;
        height: 1.8px;
      }
    }

    & .ant-menu-submenu-title {
      display: flex;
      align-items: center;

      & .ant-menu-item-icon svg,
      & .anticon {
        display: block;
      }

      & .ant-menu-item-icon {
        [dir="rtl"] & {
          margin-right: 0;
        }
      }
    }

    &.ant-menu-dark {
      & .ant-menu-item a {
        color: inherit;

        &:hover,
        &:focus {
          color: inherit;
        }
      }

      & .ant-menu-inline.ant-menu-sub {
        background: none;
      }

      & .ant-menu-item:hover,
      & .ant-menu-item-active {
        & a:hover,
        & a:focus {
          color: inherit;
        }
      }

      & .ant-menu-item-group-title {
        color: inherit;
      }

      & .ant-menu-item-active,
      & .ant-menu-submenu-title:hover {
        color: inherit;
        background-color: transparent;
      }

      & .ant-menu-submenu-open > .ant-menu-submenu-title {
        color: inherit;

        & .ant-menu-submenu-arrow:after,
        & .ant-menu-submenu-arrow:before {
          background: inherit;
          color: inherit;
        }
      }

      &
        .ant-menu-submenu-open
        > .ant-menu-submenu-title
        > .ant-menu-submenu-expand-icon,
      &
        .ant-menu-submenu-open
        > .ant-menu-submenu-title
        > .ant-menu-submenu-arrow,
      &
        .ant-menu-submenu
        > .ant-menu-submenu-title:hover
        > .ant-menu-submenu-expand-icon,
      &
        .ant-menu-submenu
        > .ant-menu-submenu-title:hover
        > .ant-menu-submenu-arrow {
        color: inherit;
      }

      & .ant-menu-submenu-selected {
        color: inherit;

        & > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
        & > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {
          background: inherit;
          color: inherit;
        }
      }
    }

    &.ant-menu-inline-collapsed {
      width: 100% !important;

      & .ant-menu-item-group-list .ant-menu-item,
      & .ant-menu-item-group-list .ant-menu-submenu-title,
      & .ant-menu.ant-menu-inline .ant-menu-item {
        width: 100%;
        margin-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;

        [dir="rtl"] & {
          margin-left: 0;
          border-radius: 0;
        }
      }

      & .ant-menu-item-active,
      & .ant-menu-submenu-title:hover {
        color: inherit;
        background-color: transparent;
      }

      &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
        background-color: transparent;

        & a {
          color: inherit;

          &:hover,
          &:focus {
            color: inherit;
          }
        }
      }

      & .ant-menu-submenu-selected {
        color: inherit;
      }

      &.ant-menu-dark {
        & .ant-menu-item-active,
        & .ant-menu-submenu-title:hover {
          color: inherit;
        }

        & .ant-menu-submenu-selected {
          color: inherit;

          & > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
          & > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {
            background: inherit;
            color: inherit;

            &:hover,
            &:focus {
              color: inherit;
            }
          }
        }
      }

      & .ant-menu-item-group-title {
        min-height: 0;
      }

      & .ant-menu-item-group-list .ant-menu-item,
      & .ant-menu-item-group-list .ant-menu-submenu-title {
        padding-left: 12px !important;
        padding-right: 12px !important;
        width: calc(100% - 16px);
        border-radius: 4px;
        margin-left: 8px;
        margin-right: 8px;

        [dir="rtl"] & {
          padding-left: 12px !important;
          padding-right: 12px !important;
        }
      }

      & .ant-menu-item .ant-menu-item-icon + span,
      & .ant-menu-submenu-title .ant-menu-item-icon + span,
      & .ant-menu-item .anticon + span,
      & .ant-menu-submenu-title .anticon + span {
        width: 0;
        margin: 0;
      }

      & > .ant-menu-item .ant-menu-item-icon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-item
        .ant-menu-item-icon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .ant-menu-item-icon,
      & > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-item-icon,
      & > .ant-menu-item .anticon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-item
        .anticon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .anticon,
      & > .ant-menu-submenu > .ant-menu-submenu-title .anticon {
        font-size: 20px;
      }
    }
  }

  &.rounded-menu-reverse {
    & .ant-menu-item-group-list .ant-menu-item,
    & .ant-menu-item-group-list .ant-menu-submenu-title,
    & .ant-menu.ant-menu-inline .ant-menu-item {
      margin-right: 0;
      margin-left: 16px;
      border-radius: 30px 0 0 30px;
      padding-left: 14px !important;

      [dir="rtl"] & {
        margin-right: 16px;
        margin-left: 0;
        border-radius: 0 30px 30px 0;
        padding-left: 12px !important;
        padding-right: 14px !important;
      }
    }

    & .ant-menu-sub.ant-menu-inline > .ant-menu-item,
    &
      .ant-menu-sub.ant-menu-inline
      > .ant-menu-submenu
      > .ant-menu-submenu-title {
      padding-left: 50px !important;

      [dir="rtl"] & {
        padding-left: 16px !important;
        padding-right: 50px !important;
      }
    }

    &.ant-menu-inline-collapsed {
      & .ant-menu-item-group-list .ant-menu-item,
      & .ant-menu-item-group-list .ant-menu-submenu-title,
      & .ant-menu.ant-menu-inline .ant-menu-item {
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        border-radius: 0;
      }

      & .ant-menu-item-group-title {
        min-height: 0;
      }

      & .ant-menu-item-group-list .ant-menu-item,
      & .ant-menu-item-group-list .ant-menu-submenu-title {
        padding-left: 12px !important;
        padding-right: 12px !important;
        width: calc(100% - 16px);
        border-radius: 4px;
        margin-left: 8px;
        margin-right: 8px;

        [dir="rtl"] & {
          padding-left: 12px !important;
          padding-right: 12px !important;
        }
      }

      & .ant-menu-item .ant-menu-item-icon + span,
      & .ant-menu-submenu-title .ant-menu-item-icon + span,
      & .ant-menu-item .anticon + span,
      & .ant-menu-submenu-title .anticon + span {
        width: 0;
        margin: 0;
      }

      & > .ant-menu-item .ant-menu-item-icon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-item
        .ant-menu-item-icon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .ant-menu-item-icon,
      & > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-item-icon,
      & > .ant-menu-item .anticon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-item
        .anticon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .anticon,
      & > .ant-menu-submenu > .ant-menu-submenu-title .anticon {
        font-size: 20px;
      }
    }
  }

  &.standard-menu {
    & .ant-menu-item-group-list .ant-menu-item,
    & .ant-menu-item-group-list .ant-menu-submenu-title,
    & .ant-menu.ant-menu-inline .ant-menu-item {
      margin-right: 8px;
      margin-left: 8px;
      border-radius: 4px;
      padding-left: 22px !important;

      [dir="rtl"] & {
        padding-left: 12px !important;
        padding-right: 22px !important;
        margin-right: 8px;
        margin-left: 8px;
        border-radius: 4px;
      }
    }

    & .ant-menu-sub.ant-menu-inline > .ant-menu-item,
    &.ant-menu-sub.ant-menu-inline
      > .ant-menu-submenu
      > .ant-menu-submenu-title {
      padding-left: 60px !important;

      [dir="rtl"] & {
        padding-left: 12px !important;
        padding-right: 60px !important;
      }
    }

    &.ant-menu-inline-collapsed {
      & .ant-menu-item-group-list .ant-menu-item,
      & .ant-menu-item-group-list .ant-menu-submenu-title,
      & .ant-menu.ant-menu-inline .ant-menu-item {
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        border-radius: 0;
      }

      & .ant-menu-item-group-title {
        min-height: 0;
      }

      & .ant-menu-item-group-list .ant-menu-item,
      & .ant-menu-item-group-list .ant-menu-submenu-title {
        padding-left: 12px !important;
        padding-right: 12px !important;
        width: calc(100% - 16px);
        border-radius: 4px;
        margin-left: 8px;
        margin-right: 8px;

        [dir="rtl"] & {
          padding-left: 12px !important;
          padding-right: 12px !important;
        }
      }

      & .ant-menu-item .ant-menu-item-icon + span,
      & .ant-menu-submenu-title .ant-menu-item-icon + span,
      & .ant-menu-item .anticon + span,
      & .ant-menu-submenu-title .anticon + span {
        width: 0;
        margin: 0;
      }

      & > .ant-menu-item .ant-menu-item-icon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-item
        .ant-menu-item-icon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .ant-menu-item-icon,
      & > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-item-icon,
      & > .ant-menu-item .anticon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-item
        .anticon,
      &
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .anticon,
      & > .ant-menu-submenu > .ant-menu-submenu-title .anticon {
        font-size: 20px;
      }
    }
  }

  &.curved-menu {
    & .ant-menu-item-group-list .ant-menu-item,
    & .ant-menu-item-group-list .ant-menu-submenu-title,
    & .ant-menu.ant-menu-inline .ant-menu-item {
      width: calc(100% - 8px);
      margin-right: 0;
      margin-left: 8px;
      border-radius: 30px 0 0 30px;
      position: relative;
      overflow: inherit;

      [dir="rtl"] & {
        margin-right: 8px;
        margin-left: 0;
        border-radius: 0 30px 30px 0;
      }

      &:before,
      &:after {
        content: "";
        position: absolute;
        right: 0;
        z-index: 1;
        height: 40px;
        width: 40px;
        background-color: transparent;
        border-radius: 50%;
        opacity: 0;
        display: block;
        border-right: 0 none;
      }

      &:before {
        top: -40px;
        box-shadow: 30px 30px 0 10px transparent;
      }

      &:after {
        bottom: -40px;
        box-shadow: 30px -30px 0 10px transparent;
        top: auto;
      }

      &.ant-menu-item-selected {
        &:before {
          box-shadow: 30px 30px 0 10px ${({ bgcolor }) => bgcolor};
          opacity: 1;
        }

        &:after {
          box-shadow: 30px -30px 0 10px ${({ bgcolor }) => bgcolor};
          opacity: 1;
        }
      }
    }

    &.ant-menu-inline-collapsed {
      & .ant-menu-item-group-list .ant-menu-item,
      & .ant-menu-item-group-list .ant-menu-submenu-title,
      & .ant-menu.ant-menu-inline .ant-menu-item {
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        border-radius: 0;
      }
    }
  }

  &.bg-color-menu {
    &.ant-menu.ant-menu-dark,
    &.ant-menu-dark .ant-menu-sub,
    &.ant-menu.ant-menu-dark .ant-menu-sub {
      background-color: transparent;
    }
  }
`;

StyledVerticalNav.propTypes = {
  bgcolor: PropTypes.string,
};
