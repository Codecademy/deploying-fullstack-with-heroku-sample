import AppScrollbar from '@crema/components/AppScrollbar';
import { List } from 'antd';
import styled from 'styled-components';

export const StyledCustomerScrollbar = styled(AppScrollbar)`
  height: 280px;
`;

export const StyledCustomItem = styled(List.Item)`
  display: flex;
  align-items: center;
  padding: 8px 20px !important;
  flex-wrap: nowrap;

  & .ant-avatar {
    min-width: 48px;
    height: 48px;
    margin-right: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }
`;

export const StyledContentArea = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};

  & h3 {
    margin-bottom: 2px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledContentAction = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledBadgeRoot = styled.span`
  padding: 3px 10px;
  border-radius: 15px;
  display: inline-block;
  white-space: nowrap;
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;
