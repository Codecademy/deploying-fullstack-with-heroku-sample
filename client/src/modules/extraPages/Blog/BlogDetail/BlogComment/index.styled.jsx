import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledTitle3 = styled.h3`
  margin-bottom: 28px;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 18px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 20px;
  }
`;

export const StyledFormWrapper = styled.div`
  .ant-select,
  .ant-input-number,
  .ant-input-number-group-wrapper {
    width: 100%;
  }

  .notification {
    margin-left: 10px;
  }

  .ant-card,
  .mb-20 {
    margin-bottom: 20px;
  }
`;

export const StyledBlogCommentList = styled.div`
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.dividerColor};
`;

export const StyledBlogCommentItemWrapper = styled.div`
  & .blog-comment-item {
    &:not(:last-of-type) {
      margin-bottom: 28px;
    }
  }
`;

export const StyledAvatar = styled(Avatar)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 50px;
    height: 50px;
  }
`;

export const StyledSecondaryText = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledSecondaryText2 = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 12px;
  }
`;

export const StyledTitle5 = styled.h5`
  font-size: 16px;
  margin-bottom: 2px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
