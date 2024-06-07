import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import { Input } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledCreatePostCard = styled(AppCard)`
  margin-bottom: 32px;
  position: relative;
`;

export const StyledCreatePostMain = styled.div`
  display: flex;
`;

export const StyledCreatePostMainContent = styled.div`
  margin-left: 14px;
  flex: 1;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }
`;

export const StyledCreatePostInput = styled(Input)`
  font-size: ${({ theme }) => theme.font.size.lg};
  border-radius: 30px;
  padding: 1px 5px 1px 14px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.background.paper};

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    border-radius: ${({ theme }) => theme.cardRadius};

    & .ant-input-suffix {
      margin-left: -8px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: -8px;
      }
    }

    &:before {
      display: none;
    }
  }
`;

export const StyledCreatePostAction = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledCreatePostActionBtn = styled.span`
  border: 0 none;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: transparent;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  width: 36px;
  height: 36px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${() => rgba('black', 0.05)};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover,
    &:focus {
      background-color: ${() => rgba('black', 0.05)};
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  & svg {
    display: block;
    font-size: 18px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      font-size: 20px;
    }
  }
`;

export const StyledCreatePostImgList = styled(AppList)`
  margin-bottom: 8px;
  display: flex !important;
  flex-wrap: wrap;
  flex-direction: row !important;
`;

export const StyledCreatePostImgItem = styled.div`
  padding: 4px;

  & img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
