import AppCard from '@crema/components/AppCard';
import { Button } from 'antd';
import styled from 'styled-components';

export const StyledSuggestTeamCard = styled(AppCard)`
  margin-bottom: 32px;

  & .ant-card-body {
    padding: 0;
  }

  & .ant-card-actions {
    background-color: transparent;

    & li {
      margin: 0;
    }
  }
`;

export const StyledSuggestTeamBtn = styled(Button)`
  width: 100%;
  height: 46px;
  border-radius: 0;
  border: 0 none;
  background-color: transparent;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.primary.main};

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  & svg {
    margin-right: 10px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 10px;
    }
  }
`;

export const StyledSuggestTeamUser = styled.div`
  padding: 12px 20px 16px;
  display: flex;
  align-items: center;

  & .ant-avatar {
    width: 40px;
    height: 40px;
  }
`;

export const StyledSuggestTeamUserContent = styled.div`
  margin-left: 14px;
  color: ${({ theme }) => theme.palette.text.secondary};
  flex: 1;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }

  & h4,
  & p {
    margin-bottom: 0;
  }
`;

export const StyledSuggestTeamThumb = styled.div`
  height: 180px;
  width: 100%;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
