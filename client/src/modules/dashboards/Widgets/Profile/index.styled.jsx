import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledWidProfileCard = styled(AppCard)`
  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledWidProfileInfo = styled.div`
  margin-bottom: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 0;
  }
`;

export const StyledWidProfileAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin-bottom: 32px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 120px;
    height: 120px;
  }
`;

export const StyledWidProfileAction = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
export const StyledWidProfileActionItem = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  & h2 {
    margin-bottom: 8px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 20px;
  }

  & p {
    text-transform: uppercase;
    margin-bottom: 0;
  }
`;
