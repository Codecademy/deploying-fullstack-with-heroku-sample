import AppRowContainer from '@crema/components/AppRowContainer';
import AppScrollbar from '@crema/components/AppScrollbar';
import { Col } from 'antd';
import styled from 'styled-components';

export const StyledAppRowContainer = styled(AppRowContainer)`
  height: 100%;
`;

export const StyledWallLeftSidebar = styled(Col)`
  margin-bottom: 0 !important;
  height: inherit;

  @media screen and (min-width: 768px) and (max-width: 1020px) {
    flex-basis: 40%;
    max-width: 40%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    display: none;
  }
`;

export const StyledWallScrollBar = styled(AppScrollbar)`
  & .ps--active-x > .ps__rail-x,
  & .ps--active-y > .ps__rail-y {
    z-index: 1;
  }
`;

export const StyledWallMainContent = styled(Col)`
  margin-bottom: 0 !important;
  height: inherit;

  @media screen and (min-width: 768px) and (max-width: 1020px) {
    flex-basis: 60%;
    max-width: 60%;
  }
`;

export const StyledWallRightSidebar = styled(Col)`
  margin-bottom: 0 !important;
  height: inherit;

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;
