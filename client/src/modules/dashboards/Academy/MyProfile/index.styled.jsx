import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import { lighten } from 'polished';
import styled from 'styled-components';

export const StyledMyProfileCard = styled(AppCard)`
  display: flex;
  flex-direction: column;
`;

export const StyledMyProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyledMyProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledMyProfileAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 90px;
    height: 90px;
    margin-bottom: 26px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 110px;
    height: 110px;
  }
`;

export const StyledMyProfileTitle = styled.h3`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledMyProfileFooter = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e7f4fc;
  color: black;
  border-radius: ${({ theme }) => theme.cardRadius};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 20px;
  }
`;

export const StyledMyProfileFooterItem = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  overflow: hidden;

  &:not(:first-child) {
    border-left: 1px solid ${({ theme }) => theme.palette.borderColor};

    [dir='rtl'] & {
      border-left: 0 none;
      border-right: 1px solid ${({ theme }) => theme.palette.borderColor};
    }
  }

  & h4 {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${() => lighten(0.285, 'black')};
  }

  & p {
    margin-bottom: 0;
  }

  & .text-truncate {
    width: 100%;
    text-align: center;
  }
`;

export const StyledMyProfileThumb = styled.div`
  margin-bottom: 12px;
`;
export const StyledMyProfileIcon = styled.div`
  margin-bottom: 8px;
`;
