import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledCoinStatsCard = styled(AppCard)`
  position: relative;
`;

export const StyledCoinStatsRow = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCoinStatsAvatar = styled(Avatar)`
  height: 46px;
  width: 46px;
  min-width: 46px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 16px;
    height: 50px;
    width: 50px;
    min-width: 50px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    height: 60px;
    width: 60px;
    min-width: 60px;
  }

  & > img {
    display: block;
    width: auto;
    height: auto;
    object-fit: inherit;
  }
`;

export const StyledCoinStatsContent = styled.div`
  position: relative;
  color: ${({ theme }) => theme.palette.text.secondary};

  & p {
    margin-bottom: 8px;
  }
`;

export const StyledCoinStatsContentAvatar = styled.div`
  display: flex;
  align-items: center;

  & h3 {
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 17px;
    margin-bottom: 0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 18px;
    }
  }

  & span {
    margin-left: 12px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 12px;
    }
  }
`;
