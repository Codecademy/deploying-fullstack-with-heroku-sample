import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledGeneralStats = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledGeneralStatsAvatar = styled(Avatar)`
  min-width: 46px;
  height: 46px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 16px;
  font-size: 18px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }

  & svg {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    font-size: 24px;
  }
`;

export const StyledGeneralStatsContent = styled.div`
  width: calc(100% - 50px);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.text.secondary};

  & p {
    margin-bottom: 0;
  }

  & h3 {
    margin-bottom: 0;
    font-size: 18px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: calc(100% - 70px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: calc(100% - 50px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: calc(100% - 90px);
  }
`;

export const StyledGeneralStatsBadge = styled.span`
  border-radius: 30px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 4px 12px;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  display: inline-block;
  min-width: 80px;
  text-align: center;

  @media only screen and (max-width: 1580px) and (min-width: 991px) {
    display: none;
  }
`;
