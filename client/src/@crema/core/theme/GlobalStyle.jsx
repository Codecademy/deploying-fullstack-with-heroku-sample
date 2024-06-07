import { createGlobalStyle } from 'styled-components';
import { darken, rgba } from 'polished';

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  canvas {
    display: block;
    height: 100%;
  }

  body {
    color: ${({ theme }) => theme.palette.text.primary};
    line-height: 1.35 !important;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weight.regular};

    @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.sm + 320}px ) {
      font-size: ${({ theme }) => theme.font.size.lg};
    }
  }

  .link {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 500;
    font-family: ${({ theme }) => theme.font.family};
  }

  h1 {
    font-size: 22px;
    font-weight: 600;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 14px;
  }

  h6 {
    font-size: 12px;
  }

  .pointer {
    cursor: pointer;
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-hover {
    transition: all 0.3s ease;
    transform: scale(1);

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, .45);
      transform: scale(1.05);
    }
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.palette.primary.main} !important;
  }

  .ant-btn-primary {
    background: ${({ theme }) => theme.palette.primary.main} !important;
    border-color: ${({ theme }) => theme.palette.primary.main} !important;

    &:hover,
    &:focus {
      background: ${({ theme }) =>
        darken(0.08, theme.palette.primary.main)} !important;
      border-color: ${({ theme }) =>
        darken(0.08, theme.palette.primary.main)} !important;
    }
  }

  .ant-btn-background-ghost.ant-btn-primary {
    color: ${({ theme }) => theme.palette.primary.main} !important;
    background: transparent !important;
    border-color: ${({ theme }) => theme.palette.primary.main} !important;

    &:hover,
    &:focus {
      color: ${({ theme }) =>
        darken(0.08, theme.palette.primary.main)} !important;
      background: transparent;
      border-color: ${({ theme }) =>
        darken(0.08, theme.palette.primary.main)} !important;
    }
  }

  .ant-spin {
    color: ${({ theme }) => theme.palette.primary.main} !important;
  }

  .ant-list-item {
    justify-content: flex-start !important;
    color: ${({ theme }) => theme.palette.text.primary} !important;
  }

  .ant-spin-dot i,
  .ant-tabs-ink-bar {
    background: ${({ theme }) => theme.palette.primary.main} !important;
  }

  .ant-spin-dot-item {
    background-color: ${({ theme }) => theme.palette.primary.main} !important;
  }

  .ant-table {
    background: transparent !important;
    color: ${({ theme }) => theme.palette.text.primary} !important;
  }

  .ant-table-wrapper .ant-table {
    background: transparent !important;
    color: ${({ theme }) => theme.palette.text.primary} !important;
  }

  .text-lowercase {
    text-transform: lowercase;
  }

  .text-capitalize {
    text-transform: capitalize;
  }

  .text-left {
    text-align: left;

    [dir=rtl] & {
      text-align: right;
    }
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;

    [dir=rtl] & {
      text-align: left;
    }
  }

  .background-image {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .cr-btn {
    box-sizing: border-box;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    text-transform: uppercase;
  }

  .cr-btn-circle {
    background-color: transparent;
    border-color: transparent;
    color: ${({ theme }) => theme.palette.gray[500]};
    box-shadow: none;

    &:hover, &:focus {
      background-color: ${({ theme }) => theme.palette.tooltipBg + '04'};
      border-color: ${({ theme }) => theme.palette.tooltipBg + '04'};
      color: ${({ theme }) => theme.palette.text.primary};
    }

    & .anticon {
      font-size: 20px;
    }
  }

  .btn-secondary {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    border-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.white};

    &:hover, &:focus {
      background-color: ${({ theme }) =>
        darken(0.25, theme.palette.secondary.main)} !important;
      border-color: ${({ theme }) =>
        darken(0.25, theme.palette.secondary.main)} !important;
      color: ${({ theme }) => theme.palette.white} !important;
    }
  }

  .btn-light-blue {
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
    color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};

    &:hover, &:focus {
      background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.2)};
      color: ${({ theme }) => theme.palette.primary.main};
      border-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.2)};
    }
  }

  .btn-secondary-outline {
    background-color: transparent;
    border-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.secondary.main};
    box-shadow: none;

    &:hover, &:focus {
      background-color: transparent;
      border-color: darken(0.15, ${({ theme }) =>
        theme.palette.secondary.main});
      color: darken(0.15, ${({ theme }) => theme.palette.secondary.main});
    }
  }

  .btn-primary-outline {
    background-color: transparent;
    border-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: none;

    &:hover, &:focus {
      background-color: transparent;
      border-color: darken(0.15, ${({ theme }) => theme.palette.primary.main});
      color: darken(0.15, ${({ theme }) => theme.palette.primary.main});
    }
  }

  .btn-white-outline {
    background-color: transparent;
    border-color: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.white};
    box-shadow: none;

    &:hover, &:focus {
      background-color: transparent;
      border-color: ${({ theme }) => theme.palette.white};
      color: ${({ theme }) => theme.palette.white};
    }
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .dot {
    height: 12px;
    width: 12px;
    display: block;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  }

  .close-btn {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.text.primary};
    box-shadow: none;
    border: 0 none;
    padding: 0;
    height: auto;

    &:hover, &:focus {
      border: 0 none;
    }

    & .anticon {
      font-size: 20px;
    }
  }

  .page-title {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.font.size.lg};
    display: inline-block;
  }

  .ant-checkbox-inner {
    width: 18px;
    height: 18px;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    width: 12px;
    height: 12px;
  }

  .ant-modal {
    max-width: 90%;
  }

  .text-secondary {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .text-green {
    //color: @green-6;
  }

  .z-index-20 {
    z-index: 20;
  }

  .ant-picker {
    //padding-top: @input-padding-vertical-base;
    //padding-bottom: @input-padding-vertical-base;
  }

  .ant-pagination {
    & li {
      margin-bottom: 4px;
      margin-top: 4px;
      overflow: hidden;
    }

    &.mini {
      & .ant-pagination-item,
      & .ant-pagination-prev,
      & .ant-pagination-next {
        margin-bottom: 4px;
        margin-top: 4px;
      }
    }
  }

  .ant-drawer,
  .ant-modal-wrap,
  .ant-modal-mask,
  .ant-picker-dropdown,
  .ant-select-dropdown,
  .ant-message {
    z-index: 1051;
  }

  .ant-drawer-close {
    color: ${({ theme }) => theme.palette.text.secondary};
    width: 36px;
    height: 36px;
    border-radius: 50%;
    top: 11px;
    right: 6px;
    padding: 5px;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.palette.background.default};
      color: ${({ theme }) => theme.palette.text.primary};

    }
  }

  // Ant Tooltip
  .ant-tooltip-inner {
    & a {
      color: ${({ theme }) => theme.palette.white};
      display: flex;
      align-items: center;

      & .ant-menu-item-icon {
        margin-right: 6px;

        & .anticon, & svg {
          display: block;
        }
      }
    }
  }


  .item-hover {
    transition: all .2s ease;
    transform: scale(1);

    &:hover {
      background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
      transform: translateY(-2px);
      box-shadow: 0 3px 10px 0 ${({ theme }) =>
        rgba(theme.palette.primary.main, 0.1)};
    }
  }


  .cr-dropdown-link {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    color: ${({ theme }) => rgba(theme.palette.tooltipBg, 0.84)};
    font-size: 20px;

    &:hover {
      background-color: ${({ theme }) => rgba(theme.palette.tooltipBg, 0.1)};
    }
  }

  .slick-slider-global .slick-dots li {
    width: 12px;
    height: 12px;
    margin: 0 2px;
    vertical-align: middle;
  }

  .slick-slider-global .slick-dots li button {
    width: 12px;
    height: 12px;
    padding: 0;
  }

  .slick-slider-global .slick-dots li.slick-active button:before {
    color: #825a44;
    opacity: .75;
  }

  .slick-slider-global .slick-dots li button:before {
    width: 12px;
    height: 12px;
    font-size: 10px;
    line-height: 12px;
    color: #be8658;
  }

  .ant-card {
    border-radius: 16px;
    line-height: 1.35;
  }


  .ant-layout .ant-layout-header {
    padding-inline: 30px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding-inline: 20px;
    }
  }

  .ant-btn, .ant-btn > .anticon {
    line-height: 1;
  }

  .ant-picker,
  .ant-picker-calendar-header,
  .ant-picker-panel,
  .ant-picker-body,
  .ant-picker-content,
  .ant-select:not(.ant-select-customize-input) .ant-select-selector,
  .ant-radio-input,
  .ant-input,
  .ant-btn-circle,
  .ant-picker-cell-in-view,
  .ant-input-affix-wrapper,
  .ant-select-dropdown,
  .ant-dropdown-menu-title-content,
  .ant-select-item-option-content,
  .ant-drawer-content,
  .ant-dropdown-menu,
  .ant-list-item-meta-description,
  .ant-input-group-addon > .ant-btn-icon-only,
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    background: ${({ theme }) => theme.palette.background.paper} !important;
    color: ${({ theme }) => theme.palette.text.primary} !important;
  }

  .ant-input::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary} !important;
  }

  .ant-dropdown-trigger {
    background: transparent;
    color: ${({ theme }) => theme.palette.text.primary} !important;
  }

  .ant-progress-text {
    color: ${({ theme }) => theme.palette.text.primary} !important;
  }

  .anticon {
    background: transparent;
  }

  .ant-modal-content {
    background: ${({ theme }) => theme.palette.background.paper} !important;

    & .ant-modal-header {
      background: ${({ theme }) => theme.palette.background.paper} !important;

      & .ant-modal-title {
        color: ${({ theme }) => theme.palette.text.primary} !important;
      }
    }

    & .ant-modal-close-icon {
      color: ${({ theme }) => theme.palette.text.primary} !important;
    }
  }

  .ant-card {
    background: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    overflow: hidden;
    border-radius: ${({ theme }) => theme.cardRadius};
  }

  .ant-radio-wrapper,
  .ant-list-item-meta-title,
  .ant-tabs-tab .ant-tabs-tab-btn,
  .ant-picker-content th,
  .ant-table-thead .ant-table-cell {
    color: ${({ theme }) => theme.palette.text.primary} !important;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    color: ${({ theme }) => theme.palette.text.secondary};
    background: ${({ theme }) => theme.palette.background.paper};
  }

  .ant-select-arrow,
  .ant-picker-cell,
  .ant-list-item-meta-description {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  .ant-checkbox-input {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }

  .rnc__notification-container--top-right {
    right: 320px !important;
  }

  .rnc__notification-container--bottom-center,
  .rnc__notification-container--bottom-left {
    bottom: 200px !important;
  }

  .rnc__notification-container--bottom-right {
    bottom: 200px !important;
    right: 320px !important;
  }

  .boxedLayout {
    @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.xl + 80}px) {
      max-width: 1260px;
      margin-left: auto;
      margin-right: auto;

      #root {
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
      }

      & .appMainFixedFooter {
        & .app-main-footer {
          max-width: 1260px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      & .mini-sidebar-toggle.ant-layout-sider,
      & .mini-sidebar.ant-layout-sider,
      & .userMiniHeader-sidebar.ant-layout-sider {
        position: absolute;
      }

      & .app-header-mini-sidebar,
      & .app-header-mini,
      & .app-userMiniHeader {
        position: absolute;
        width: 100% !important;
      }

      & .mini-sidebar-toggle.ant-layout-sider-collapsed + .app-layout-mini-sidebar-main .app-header-mini-sidebar,
      & .mini-sidebar.ant-layout-sider-collapsed + .app-layout-mini-main .app-header-mini,
      & .userMiniHeader-sidebar.ant-layout-sider-collapsed + .app-layout-userMiniHeader-main .app-userMiniHeader {
        width: 100% !important;
      }

      & .app-layout-mini-sidebar,
      & .app-layout-mini,
      & .app-layout-userMiniHeader {
        padding-top: 0;
      }

      & .app-layout-mini-sidebar-main,
      & .app-layout-mini-main,
      & .app-layout-userMiniHeader-main {
        padding-top: 71px;
      }

      & .coin-stats-content h3 {
        font-size: ${({ theme }) => theme.font.size.lg};
      }

      & .coin-stats-content span {
        font-size: ${({ theme }) => theme.font.size.sm};
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      max-width: 1460px;

      & .appMainFixedFooter {
        & .app-main-footer {
          max-width: 1460px;
        }
      }
    }
  }

  //Framed Layout
  .framedLayout {
    @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.xl + 80}px) {
      padding: ${({ theme }) => theme.sizes.framed.base};
      background-color: ${({ theme }) => theme.palette.secondary.main};

      #root {
        height: calc(100vh - 2 * ${({ theme }) => theme.sizes.framed.base});
        overflow: hidden;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        border-radius: 12px;
      }

      &.framedHorLayout,
      &.framedHorDarkLayout,
      &.framedHorHeaderFixedLayout {

        #root {
          overflow-y: auto;
        }
      }

      & .app-sidebar-scrollbar,
      & .main-scrollbar,
      & .app-mini-sidebar-scrollbar,
      & .main-mini-sidebar-scrollbar,
      & .main-mini-scrollbar,
      & .standard-main-scrollbar,
      & .userHeader-main-scrollbar,
      & .main-userMiniHeader-scrollbar,
      & .drawerLayout-main-scrollbar,
      & .app-BitBucket-sidebar-scrollbar {
        max-height: calc(100vh - (71px + 2 * ${({ theme }) =>
          theme.sizes.framed.base}));
      }

      & .app-standard-sidebar-scrollbar {
        max-height: calc(100vh - (140px + 2 * ${({ theme }) =>
          theme.sizes.framed.base}));
      }

      & .app-userHeader-sidebar-scrollbar,
      & .app-sidebar-userMiniHeader-scrollbar,
      & .bitBucket-main-scrollbar,
      & .bucket-minibar {
        max-height: calc(100vh - (2 * ${({ theme }) =>
          theme.sizes.framed.base}));
      }

      & .app-layout {
        height: calc(100vh - 2 * ${({ theme }) => theme.sizes.framed.base});
        min-height: 10px;
      }

      & .auth {
        min-height: 10px;
        height: 100%;
      }

      & .main-auth-scrollbar {
        min-height: 10px;
      }

      & .apps-container {
        height: calc(100vh - (153px + 2 * ${({ theme }) =>
          theme.sizes.framed.base}));
      }

      & .app-layout-mini-sidebar,
      & .app-layout-mini,
      & .app-layout-hor,
      & .app-layout-hor-header-fixed {
        min-height: 100%;
      }

      & .mini-sidebar-toggle.ant-layout-sider,
      & .mini-sidebar.ant-layout-sider,
      & .userMiniHeader-sidebar.ant-layout-sider {
        position: absolute;
      }

      & .app-header-mini-sidebar,
      & .app-header-mini,
      & .app-userMiniHeader {
        position: absolute;
        width: 100% !important;
      }

      & .mini-sidebar-toggle.ant-layout-sider-collapsed + .app-layout-mini-sidebar-main .app-header-mini-sidebar,
      & .mini-sidebar.ant-layout-sider-collapsed + .app-layout-mini-main .app-header-mini,
      & .userMiniHeader-sidebar.ant-layout-sider-collapsed + .app-layout-userMiniHeader-main .app-userMiniHeader {
        width: 100% !important;
      }

      & .app-layout-mini-sidebar,
      & .app-layout-mini,
      & .app-layout-userMiniHeader {
        padding-top: 0;
      }

      & .app-layout-mini-sidebar-main,
      & .app-layout-mini-main,
      & .app-layout-userMiniHeader-main {
        padding-top: 71px;
      }
    }
  }

`;
