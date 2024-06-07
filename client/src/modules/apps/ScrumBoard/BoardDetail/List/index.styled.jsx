import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

export const StyledScrumBoardListHeaderCard = styled(AppCard)`
  margin-bottom: 8px;

  & .ant-card-body {
    padding: 10px 24px;
  }
`;

export const StyledScrumBoardListHeaderFlex = styled.div`
  display: flex;
  align-items: center;

  & h5 {
    font-size: 15px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 0;
  }
`;

export const StyledScrumBoardListHeaderFlexAuto = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledScrumListHeaderList = styled.div`
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;

export const StyledSCrumBoardAddBtnCard = styled(AppCard)`
  margin-top: 4px;
  cursor: pointer;

  & > .ant-card-body {
    padding: 16px 24px;
  }
`;

export const StyledScrumBoardAddCardBtnUser = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledScrumBoardAddCardUserAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.palette.gray[100]};
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledScrumBoardMdAdd = styled(MdAdd)`
  color: ${({ theme }) => theme.palette.text.disabled};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: 20px;
  display: block;
`;

export const StyledScrumBoardAddBtnCardText = styled.div`
  margin-left: 12px;
  font-weight: ${({ theme }) => theme.font.weight.regular};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 12px;
  }
`;
