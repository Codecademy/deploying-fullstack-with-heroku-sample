import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import AppScrollbar from '@crema/components/AppScrollbar';
import { List } from 'antd';

export const StyledSidebarHeader = styled.div`
  padding: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 20px;
  }

  & .ant-btn {
    border-radius: ${({ theme }) => theme.cardRadius30};
    padding: 8px 28px;
    height: 42.5px;
  }
`;

export const StyledPlusOutlined = styled(PlusOutlined)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 16px;
`;

export const StyledSidebarScrollbar = styled(AppScrollbar)`
  height: calc(100% - 80px);
`;

export const StyledSidebarList = styled(List)`
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
  }
`;
