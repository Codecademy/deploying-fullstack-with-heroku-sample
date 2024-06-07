import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import { IoMdAttach } from 'react-icons/io';
import styled from 'styled-components';

export const StyledScrumBoardCardDetails = styled(AppCard)`
  margin-bottom: 8px;
  cursor: pointer;

  & .ant-card-body {
    padding: 16px 24px;
  }
`;

export const StyledScrumBoardCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const StyledScrumBoardCardHeaderAction = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  & span {
    font-weight: ${({ theme }) => theme.font.weight.light};
  }

  & svg {
    font-size: 18px;
  }
`;

export const StyledScrumBoardCardDetailTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-right: 8px;
  white-space: normal;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledIoMdAttach = styled(IoMdAttach)`
  margin-left: 8px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;

export const StyledScrumBoardCardDetailUser = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledScrumBoardCardDetailDate = styled.span`
  margin-left: 4px;
  margin-right: auto;
  color: ${({ theme }) => theme.palette.text.secondary};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 4px;
  }
`;
export const StyledScrumBoardCardDetailComment = styled.span`
  margin-left: 8px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.secondary};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }

  & span {
    margin-right: 8px;
    font-weight: ${({ theme }) => theme.font.weight.light};

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;

export const StyledScrumBoardLabelFlex = styled.div`
  margin: 16px -4px;
  display: flex;
  align-items: center;
`;

export const StyledScrumBoardLabel = styled.span`
  width: 32px;
  height: 4px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    height: 6px;
  }
`;

export const StyledScrumBoardMember = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledScrumBoardMemberAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;
