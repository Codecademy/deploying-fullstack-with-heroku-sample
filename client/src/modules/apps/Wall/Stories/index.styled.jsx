import AppCard from '@crema/components/AppCard';
import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledStoriesCard = styled(AppCard)`
  margin-bottom: 32px;
`;

export const StyledStoriesRow = styled.div`
  display: flex;
  margin-left: -5px;
  margin-right: -5px;
`;

export const StyledStoriesCol = styled.div`
  width: 50%;
  padding-left: 5px;
  padding-right: 5px;
`;

export const StyledStoriesItemCard = styled.div`
  position: relative;
`;

export const StyledStoriesCardMedia = styled.img`
  width: 100%;
  min-height: 160px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
`;

export const StyledStoriesUserInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 30px 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(120, 130, 146, 0) 7.29%,
      #788292 100%
    );
    border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius.base};
    border-bottom-right-radius: ${({ theme }) => theme.sizes.borderRadius.base};
    opacity: 0.65;
  }

  & > * {
    position: relative;
    z-index: 3;
  }
`;

export const StyledStoriesUserInfoAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  border: solid 2px ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: 2px;
  margin-bottom: 5px;
`;

export const StyledStoriesUserInfoTitle = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 0;
`;
