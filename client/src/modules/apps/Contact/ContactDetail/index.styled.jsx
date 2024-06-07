import styled from 'styled-components';
import { FiFacebook, FiMail, FiPhone, FiTwitter } from 'react-icons/fi';
import { AiOutlineGlobal, AiOutlineShopping } from 'react-icons/ai';
import { Avatar, Modal } from 'antd';
import AppScrollbar from '@crema/components/AppScrollbar';

export const StyledContactDetailModalItem = styled.div`
  padding: 20px 0;
`;
export const StyledContactDetailModalItemContent = styled.div`
  position: relative;
`;

export const StyledContactDetailModalItemTitle = styled.h6`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.lg};
  margin-bottom: 8px;
`;

export const StyledOtherDetailItem = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 8px;
  }
`;
export const StyledOtherDetailItemContent = styled.div`
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;

export const StyledFiFacebookIcon = styled(FiFacebook)`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.palette.gray[600]};
`;

export const StyleFiTwitterIcon = styled(FiTwitter)`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.palette.gray[600]};
`;
export const StyleFiMailIcon = styled(FiMail)`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.palette.gray[600]};
`;
export const StyleFiPhoneIcon = styled(FiPhone)`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.palette.gray[600]};
`;
export const StyleAiOutlineGlobalIcon = styled(AiOutlineGlobal)`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.palette.gray[600]};
`;
export const StyleAiOutlineShoppingIcon = styled(AiOutlineShopping)`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.palette.gray[600]};
`;
export const StyleAiOutlineHomeIcon = styled(AiOutlineGlobal)`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.palette.gray[600]};
`;
export const StyleRiFoldersLineIcon = styled(AiOutlineShopping)`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.palette.gray[600]};
`;

export const StyledContactNote = styled.div`
  padding: 20px 20px 20px 0;

  [dir='rtl'] & {
    padding-left: 20px;
    padding-right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-right: 32px;

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 32px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-right: 40px;

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 40px;
    }
  }
`;

export const StyledContactAction = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.disabled};
`;
export const StyledContactActionHover = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
  visibility: hidden;
`;

export const StyledContactDetailModal = styled(Modal)`
  position: relative;

  & .ant-modal-body {
    background-color: ${({ theme }) => theme.palette.background.paper};
    padding: 0;
  }

  & .ant-modal-close {
    display: none;
  }

  &:hover {
    & .contact-action-hover {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const StyledContactModalHeader = styled.div`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  padding: 20px;
`;

export const StyledContactModalUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-top: -12px;
  }

  & h4 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const StyledContactModalUserAvatar = styled(Avatar)`
  width: 55px;
  height: 55px;
  margin-bottom: 8px;
`;

export const StyledContactDetailScrollbar = styled(AppScrollbar)`
  position: relative;
  max-height: 400px;

  & .ant-row > .ant-col {
    margin-bottom: 0;
  }
`;

export const StyledContactDetailContent = styled.div`
  padding: 20px 24px;
`;
