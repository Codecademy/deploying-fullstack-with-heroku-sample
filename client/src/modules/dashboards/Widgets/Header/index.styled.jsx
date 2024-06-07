import AppCard from '@crema/components/AppCard';
import { Button } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledHeaderImgCard = styled(AppCard)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    background-color: ${({ theme }) => rgba(theme.palette.tooltipBg, 0.35)};
    border-radius: inherit;
  }

  & > * {
    position: relative;
    z-index: 3;
  }

  & .ant-card-head-title {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;

export const StyledHeaderImgContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 75%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 50%;
  }
`;

export const StyledHeaderImgFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeaderImgBtn = styled(Button)`
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.base};

  & + & {
    margin-left: 16px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 16px;
    }
  }
`;
