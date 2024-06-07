import AppCard from '@crema/components/AppCard';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledVisitorCard = styled(AppCard)`
  height: 100%;
`;

export const StyledVisitorAction = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    align-items: center;
    flex-direction: row;
  }

  & .visitor-action-view {
    display: none;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 10px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      display: flex;
    }
  }

  & .visitor-action-item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 1;
    padding-bottom: 2px;
    &:not(:first-of-type) {
      border-left: solid 1px
        ${({ theme }) => rgba(theme.palette.text.secondary, 0.2)};
      margin-left: 16px;
      padding-left: 16px;
    }
  }
  & .dot-visitor {
    height: 10px;
    width: 10px;
    margin-right: 4px;
    border-radius: 50%;
  }
`;
