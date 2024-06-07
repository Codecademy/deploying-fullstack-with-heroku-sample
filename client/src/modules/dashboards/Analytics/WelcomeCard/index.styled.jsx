import AppCard from '@crema/components/AppCard';
import AppScrollbar from '@crema/components/AppScrollbar';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledWelcomeCard = styled(AppCard)`
  overflow: hidden;
`;

export const StyledWelcomeCardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }
`;

export const StyledWelcomeCardContent = styled.div`
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: calc(100% - 140px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-right: 10px;
    width: calc(100% - 170px);

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 10px;
    }
  }
`;

export const StyledWelcomeCardHeader = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 50px;
  }

  & h5 {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  & h3 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 20px;
    margin-bottom: 12px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 24px;
    }
  }
`;

export const StyledWelcomeCardScroll = styled(AppScrollbar)`
  max-width: 100%;
  width: 100%;
  height: 100%;
`;

export const StyledWelcomeCardContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
`;

export const StyledWelcomeCardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: -12px;
  margin-right: -12px;
`;

export const StyledWelcomeCardCol = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 12px;
  display: flex;
  align-items: center;
`;

export const StyledWelcomeCardColThumb = styled.div`
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }

  & .ant-avatar {
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};
    width: 46px;
    height: 46px;
    min-width: 46px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      font-size: 26px;
      height: 60px;
      width: 60px;
      min-width: 60px;
    }
  }
`;

export const StyledWelcomeCardColContent = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};

  & p {
    margin-bottom: 0;
  }
`;

export const StyledSpecialTitle = styled.h5`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 18px;
  line-height: 1;
  margin-bottom: 2px;
`;

export const StyledWelcomeImg = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: -10px;
  margin-bottom: -20px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: -10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: 150px;
    min-width: 140px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    max-width: 180px;
    min-width: 170px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
