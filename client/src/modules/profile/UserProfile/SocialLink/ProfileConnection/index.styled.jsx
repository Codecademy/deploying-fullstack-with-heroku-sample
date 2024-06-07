import AppCard from '@crema/components/AppCard';
import { Button } from 'antd';
import styled from 'styled-components';

export const StyledProfileConnection = styled.div`
  position: relative;
  margin-left: -20px;
  margin-right: -20px;
  margin-top: 12px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
`;

export const StyledProfileConnectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 16px;
`;

export const StyledMemberItem = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: 16px;
`;

export const StyledMemberCard = styled(AppCard)`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
`;

export const StyledMemberCardTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledMemberInfo = styled.div`
  display: flex;
`;

export const StyledMemberThumb = styled.div`
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }

  & .ant-avatar {
    width: 40px;
    height: 40px;
  }
`;

export const StyledMemberInfoContent = styled.div`
  flex: 1;

  & h5 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};
    margin-bottom: 10px;
  }

  & .ant-btn {
    font-size: ${({ theme }) => theme.font.size.sm};
    height: 30px;
    padding: 3.5px 12px;
  }
`;

export const StyledDisconnectBtn = styled(Button)`
  background-color: rgba(240, 79, 71, 0.1);
  color: ${({ theme }) => theme.palette.secondary.main};
  border-color: rgba(240, 79, 71, 0.1);

  &:hover,
  &:focus {
    background-color: rgba(240, 79, 71, 0.2);
    color: ${({ theme }) => theme.palette.secondary.main};
    border-color: rgba(240, 79, 71, 0.2);
  }
`;
