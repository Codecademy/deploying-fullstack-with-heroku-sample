import AppCard from '@crema/components/AppCard';
import { Divider } from 'antd';
import styled from 'styled-components';

export const StyledIllustrationCard = styled(AppCard)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const StyledIllustrationImgHeader = styled.div`
  position: relative;
  flex: 1;
  display: flex;

  & .img-full {
    width: 100%;
  }
`;

export const StyledIlustrationBadge = styled.span`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  position: absolute;
  left: 16px;
  bottom: 16px;
  font-weight: ${({ theme }) => theme.font.weight.light};
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.font.size.lg};
  padding: 4px 12px;
  border-radius: 30px;

  [dir='rtl'] & {
    left: auto;
    right: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 18px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    left: 24px;
    bottom: 24px;

    [dir='rtl'] & {
      left: auto;
      right: 24px;
    }
  }
`;

export const StyledIllustrationContent = styled.div`
  padding: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 24px;
  }

  & h4 {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const StyledIllDivider = styled(Divider)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const StyledIllustrationAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledIllustrationActionItem = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & .ill-middle-icon {
    font-size: 18px;
    margin-right: 8px;
    vertical-align: middle;
    display: inline-block;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;
