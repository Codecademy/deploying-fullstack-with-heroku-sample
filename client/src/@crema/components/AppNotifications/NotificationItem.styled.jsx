import { Avatar, List } from 'antd';
import styled from 'styled-components';

export const StyledNotifyListItem = styled(List.Item)`
  padding: 8px 20px !important;
  border-bottom: 0 none !important;

  & .ant-list-item-meta {
    align-items: center;
  }

  & .ant-list-item-meta-avatar {
    margin-right: 12px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-right: 16px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 16px;
      }
    }
  }

  & .ant-list-item-meta-title {
    margin-bottom: 2px;
  }

  & .ant-list-item-meta-description {
    color: ${({ theme }) => theme.palette.text.secondary} !important;
  }
`;

export const StyledNotifyMsgAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
`;
