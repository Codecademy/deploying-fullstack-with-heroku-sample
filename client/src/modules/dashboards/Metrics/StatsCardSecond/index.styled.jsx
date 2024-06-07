import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledStatsSecondCard = styled(AppCard)`
  text-align: center;

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 8px;
  }

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

export const StyledStatsSecondAvatar = styled(Avatar)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin: 0 auto 16px;
  height: 60px;
  width: 60px;

  & > img {
    width: auto;
    height: auto;
  }
`;
