import { PlusOutlined } from '@ant-design/icons';
import AppScrollbar from '@crema/components/AppScrollbar';
import { Avatar, List } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledMailConnectionListItem = styled.div`
  padding: 4px 16px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  border: 0 none !important;
  align-items: flex-start;
  color: ${({ theme }) => theme.palette.text.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const StyledMailConnectionAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  margin-right: 14px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }
`;

export const StyledMailConnectionContent = styled.div`
  position: relative;
`;
export const StyledMailConnectionTitle = styled.p`
  margin-bottom: 0;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledMailSidebarHeader = styled.div`
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

export const StyledMailSidebarScrollbar = styled(AppScrollbar)`
  height: calc(100% - 80px);
`;

export const StyledMailSidebarContent = styled.div`
  padding-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-bottom: 20px;
  }
`;

export const StyledMailSidebarList = styled(List)`
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
  }
`;

export const StyledMailSidebarTitle = styled.h5`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-top: 16px;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-top: 20px;
  }
`;

export const StyledMailLabelItem = styled.div`
  position: relative;
  font-size: 15px;

  & a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 8.5px 16px;
    margin-right: 20px;
    border-radius: 0 ${({ theme }) => theme.cardRadius30}
      ${({ theme }) => theme.cardRadius30} 0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding: 8.5px 20px;
    }

    &:hover,
    &:focus,
    &.active {
      color: ${({ theme }) => theme.palette.primary.main};
      background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
    }

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 20px;
      border-radius: ${({ theme }) => theme.cardRadius30} 0 0
        ${({ theme }) => theme.cardRadius30};
    }
  }

  & .mail-dots {
    margin-right: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-right: 20px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 20px;
      }
    }
  }
`;

export const StyledPlusOutlined = styled(PlusOutlined)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 16px;
`;
