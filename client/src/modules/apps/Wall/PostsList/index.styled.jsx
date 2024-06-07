import styled from 'styled-components';
import AppList from '@crema/components/AppList';
import {
  CommentOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Input } from 'antd';
import AppCard from '@crema/components/AppCard';
import { rgba } from 'polished';

export const StyledPostList = styled(AppList)`
  height: auto !important;
`;

export const StyledPostStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 24px;
  }
`;

export const StyledPostStatsItem = styled.span`
  display: flex;
  align-items: center;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const StyledLikeOutlined = styled(LikeOutlined)`
  font-size: 18px;
`;
export const StyledCommentOutlined = styled(CommentOutlined)`
  font-size: 18px;
`;
export const StyledShareAltOutlined = styled(ShareAltOutlined)`
  font-size: 18px;
`;

export const StyledPostStatsItemInfo = styled.span`
  margin-left: 6px;
  font-size: ${({ theme }) => theme.font.size.sm};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 6px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;

export const StyledPostItemUser = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPostItemAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 40px;
    height: 40px;
  }
`;

export const StyledPostItemUserInfo = styled.div`
  margin-left: 14px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-left: 16px;
  }

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-right: 16px;
    }
  }

  & h3 {
    font-size: ${({ theme }) => theme.font.size.base};
    margin-bottom: 2px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    line-height: 1;
  }

  & p {
    margin-bottom: 0;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;

export const StyledPostItemCard = styled(AppCard)`
  position: relative;

  &.mb-5 {
    margin-bottom: 32px;
  }
`;

export const StyledPostItemExtraBtn = styled(Button)`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  background-color: transparent;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  box-shadow: none;
  font-size: 20px;

  &:hover,
  &:focus {
    background-color: ${() => rgba('black', 0.1)};
    color: ${({ theme }) => theme.palette.text.primary};
    border-color: ${({ theme }) => theme.palette.borderColor};
  }

  & .anticon svg {
    display: block;
  }
`;

export const StyledPostItemPara = styled.p`
  margin-bottom: 8px;
`;

export const StyledPostAttachment = styled.div`
  margin-bottom: 20px;
`;

export const StyledPostAttachmentImgItem = styled.div`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  overflow: hidden;
  position: relative;
  max-height: 240px;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledPostAttachmentCount = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${() => rgba('black', 0.5)};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const StyledAddComment = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 24px;
  }
`;

export const StyledAddCommentUser = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 16px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 1200px) and (max-width: 1300px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledAddCommentUserInfo = styled.div`
  flex: 1;

  & .ant-input {
    height: 30px;
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;

export const StyledAddCommentInput = styled(Input)`
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 1px 5px 1px 14px;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const StyledAddSuffixAction = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPostCommentItem = styled.div`
  position: relative;
  display: flex;
  padding: 0;
  align-items: flex-start;
  justify-content: flex-start;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyledPostCommentItemContent = styled.div`
  margin-left: 16px;
  flex: 1;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 16px;
  }
`;

export const StyledPostCommentItemContentArea = styled.div`
  padding: 12px 20px;
  border: 1px solid ${({ theme }) => theme.palette.gray[200]};
  border-radius: ${({ theme }) => theme.cardRadius};
  border-bottom-left-radius: 0;
  display: inline-block;
`;

export const StyledPostCommentItemAction = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  & span {
    color: ${({ theme }) => theme.palette.text.primary};

    &.active {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    &:not(:first-child) {
      margin-left: 16px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 16px;
      }
    }
  }
`;

export const StyledPostCommentList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  padding-top: 20px;
`;

export const StyledPostCommentListTitle = styled.h3`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 24px;
  }
`;
