import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledMetricsStatsCard = styled(AppCard)`
  text-align: center;

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 8px;
  }

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 20px;
    margin-bottom: 0;
  }
`;

export const StyledMetricsStatsAvatar = styled(Avatar)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin: 0 auto 16px;
  height: 50px;
  width: 50px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: 60px;
    width: 60px;
  }

  & > img {
    width: auto;
    height: auto;
  }
`;
