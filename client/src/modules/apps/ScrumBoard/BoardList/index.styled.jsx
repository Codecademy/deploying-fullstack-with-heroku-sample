import AppRowContainer from '@crema/components/AppRowContainer';
import AppCard from '@crema/components/AppCard';
import { Button, Modal } from 'antd';
import styled from 'styled-components';

export const StyledScrumBoardWrap = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledScrumBoardHeader = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 32px;
    margin-top: 32px;
  }

  & h2 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
    margin-bottom: 0;
  }
`;

export const StyledScrumBoardContainer = styled(AppRowContainer)`
  justify-content: center;
`;

export const StyledScrumBoardCard = styled(AppCard)`
  border-radius: ${({ theme }) => theme.cardRadius};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 224px;

  & .ant-card-body {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const StyledScrumListIcon = styled.div`
  margin-bottom: 25px;
  font-size: 20px;
  display: flex;
  align-items: center;

  & svg:not(:first-child) {
    margin-left: 20px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 20px;
    }
  }
`;

export const StyledScrumBoardCardText = styled.p`
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledScrumBoardAddModal = styled(Modal)`
  position: relative;
`;

export const StyledScrumAddBoardFooterBtn = styled(Button)`
  width: 94px;
`;

export const StyledScrumAddBoardCard = styled(AppCard)`
  & .ant-card-body {
    padding: 0;
  }
`;

export const StyledScrumBoardAddcard = styled(AppCard)`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.cardRadius};
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.background.paper};
  height: 224px;
  border: dashed 2px ${({ theme }) => theme.palette.gray[600]};

  & .ant-card-body {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const StyledScrumBoardAddCardIcon = styled.span`
  background-color: ${({ theme }) => theme.palette.gray[500]};
  color: white;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  margin-bottom: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 40px;
    }
  }
`;

export const StyledScrumBoardAddCardText = styled.p`
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
