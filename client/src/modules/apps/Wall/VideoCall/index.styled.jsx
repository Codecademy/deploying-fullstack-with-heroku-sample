import AppCard from '@crema/components/AppCard';
import { Avatar, Button } from 'antd';
import { lighten } from 'polished';
import styled from 'styled-components';

export const StyledVideoCallCard = styled(AppCard)`
  margin-bottom: 32px;

  & .ant-card-cover {
    & img {
      height: 140px;
      object-fit: cover;
      border-radius: 16px 16px 0 0;
    }
  }

  & .ant-card-body {
    padding-top: 0;
  }
`;

export const StyledVideoCallUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.palette.text.secondary};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    margin-bottom: 30px;
  }

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 4px;
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledVideoCallUser = styled.div`
  position: relative;

  & .ant-avatar {
    border: solid 5px ${({ theme }) => theme.palette.background.default};
    margin-bottom: 10px;
    width: 84px;
    height: 84px;
    margin-top: -42px;
  }
`;

export const StyledVideoCallUserStatus = styled.span`
  position: absolute;
  right: 2px;
  bottom: 12px;
  z-index: 1;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  border: solid 3px ${({ theme }) => theme.palette.primary.contrastText};
  display: flex;
  justify-content: center;
  align-items: center;

  & .MuiSvgIcon-root {
    font-size: 14px;
  }

  [dir='rtl'] & {
    right: auto;
    left: 2px;
  }
`;

export const StyledVideoCall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & h5 {
    margin-bottom: 4px;
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const StyledVideoCallAvatarView = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    margin-bottom: 16px;
  }
`;

export const StyledVideoCallAvatar = styled(Avatar)`
  width: 28px;
  height: 28px;
  border: solid 2px white;
  margin-right: -4px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: -4px;
  }
`;

export const StyledVideoCallAvatarCount = styled.span`
  border: 2px solid ${({ theme }) => theme.palette.primary.contrastText};
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.palette.success.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  margin-right: -4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: -4px;
  }
`;

export const StyledVideoCallBtnView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;

  & .ant-btn {
    margin: 0 8px 8px;
    text-transform: capitalize;
  }
`;

export const StyledVideoCallBtn = styled(Button)`
  background-color: ${({ theme }) => lighten(0.48, theme.palette.primary.main)};
  color: ${({ theme }) => theme.palette.primary.main};
  border: 0 none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) =>
      lighten(0.5, theme.palette.primary.main)};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
