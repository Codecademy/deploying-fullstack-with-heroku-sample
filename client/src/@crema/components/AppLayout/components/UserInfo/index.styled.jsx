import styled from 'styled-components';
import { Avatar, List } from 'antd';
import { darken } from 'polished';

export const StyledDropdownList = styled(List)`
  & .ant-list-item {
    padding: 5px 12px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) =>
        darken(0.03, theme.palette.background.paper)};
    }
  }
`;

export const StyledCrUserInfo = styled.div`
  background-color: transparent;
  padding: 7px 12px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 71px;
  }

  & .ant-dropdown-link {
    color: inherit;

    & .anticon {
      font-size: ${({ theme }) => theme.font.size.sm};
    }
  }

  &.light {
    & .ant-dropdown-link {
      color: inherit;
    }
  }
`;

export const StyledCrUserInfoInner = styled.a`
  display: flex;
  align-items: center;
`;

export const StyledCrUserInfoAvatar = styled(Avatar)`
  font-size: 24px;
  background-color: ${({ theme }) => theme.palette.orange[6]};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCrUserInfoContent = styled.span`
  width: calc(100% - 62px);
  margin-left: 16px;
  transition: all 0.2s ease;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 16px;
  }
`;

export const StyledUsernameInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledUsername = styled.h3`
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: inherit;

  &.light {
    color: inherit;
  }
`;

export const StyledUserArrow = styled.span`
  margin-left: 12px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 12px;
  }

  & svg {
    display: block;
  }
`;

export const StyledCrUserDesignation = styled.span`
  margin-top: -2px;
  color: inherit;
  font-size: ${({ theme }) => theme.font.size.base};

  .ant-layout-sider-dark & {
    color: inherit;
  }
`;
