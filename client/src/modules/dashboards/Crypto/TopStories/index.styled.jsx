import { Typography } from 'antd';
import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImgWrapper = styled.div`
  margin-right: 16px;
  max-height: 60px;
  max-width: 60px;
  min-width: 60px;

  & img {
    display: block;
    width: '100%';
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const StyledStoryWrapper = styled.div`
  position: relative;
  & .stories-item {
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.palette.dividerColor};
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
  }
`;

export const StyledTitle = styled(Typography.Title)`
  margin-bottom: 2px;
  font-size: ${({ theme }) => theme.font.size.base} !important;
  font-size: 2px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledSecText = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.text.secondary};
`;
