import styled from 'styled-components';
import AppCard from '../AppCard';
import { HiOutlineCode } from 'react-icons/hi';

export const StyledCompCard = styled(AppCard)`
  position: relative;
  box-shadow: ${({ theme }) => theme.cardShadow};

  & > .ant-card-head {
    min-height: 10px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 0 none;
    margin-bottom: 0;

    & .ant-card-head-title {
      line-height: 1.4993rem;
      padding-bottom: 4px;
      margin-right: 8px;

      & span {
        display: block;
      }
    }

    & .ant-card-extra {
      padding-bottom: 4px;
    }
  }

  & > .ant-card-body {
    padding: 16px 20px;
  }
`;

export const StyledCompCardTitleDesc = styled.span`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledHiOutlineCode = styled(HiOutlineCode)`
  font-size: 20px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledPreTag = styled.pre`
  border-radius: 8px;
  padding: 12px;
  max-height: none !important;
`;

export const StyledComponentRoot = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
