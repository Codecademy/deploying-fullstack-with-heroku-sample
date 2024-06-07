import AppScrollbar from '@crema/components/AppScrollbar';
import { List } from 'antd';
import styled from 'styled-components';

export const StyledCategoryListHalf = styled(List)`
  & .ant-list-items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 0;
  }
`;

export const StyledCategoryItem = styled(List.Item)`
  position: relative;
  width: 50%;
  padding: 8px 20px !important;
  border-bottom: 0 none !important;
  justify-content: flex-start;

  & .ant-checkbox-wrapper {
    margin-right: 12px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }
  }

  & .ant-checkbox {
    top: 0;
  }
`;

export const StyledCategoryScrollbar = styled(AppScrollbar)`
  height: 212px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    height: 322px;
  }
`;
