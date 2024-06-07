import { CheckCircleOutlined } from '@ant-design/icons';
import AppCard from '@crema/components/AppCard';
import { Avatar, Button } from 'antd';
import { lighten } from 'polished';
import styled from 'styled-components';

export const StyledFollowItem = styled.div`
  padding: 8px 20px;
  display: flex;
`;

export const StyledFollowAvatar = styled(Avatar)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  margin-bottom: 6px;
`;

export const StyledFollowItemInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  margin-left: 14px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }
`;

export const StyledFollowItemContent = styled.div`
  flex: 1;
  margin-bottom: 6px;
  margin-right: 10px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 10px;
  }

  & p {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const StyledFollowItemContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h5 {
    margin-bottom: 0;
  }
`;

export const StyledFollowItemIcon = styled(CheckCircleOutlined)`
  font-size: 14px;
  margin-left: 6px;
  color: ${({ theme }) => theme.palette.success.main};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 6px;
  }
`;

export const StyledFollowItemBtn = styled(Button)`
  text-transform: capitalize;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary.main};
  border-color: ${({ theme }) => lighten(0.48, theme.palette.primary.main)};
  height: 30px;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.cardRadius30};

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => lighten(0.5, theme.palette.primary.main)};
  }
`;

export const StyledWhoFollowCard = styled(AppCard)`
  margin-bottom: 32px;

  & .ant-card-actions {
    background-color: transparent;
  }
`;

export const StyledWhoFollowLink = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
`;
