import AppCard from '@crema/components/AppCard';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledCardWrapper = styled(AppCard)`
  &.ant-card {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const StyledCardMediaWrapper = styled(AppCard)`
  position: relative;
  cursor: pointer;

  & .ant-card-body {
    padding: 0;
  }

  & .card-content {
    text-align: center;
    margin-top: 16px;
    margin-bottom: 24px;
  }
  & .card-media-wrapper {
    position: relative;
  }
  & .card-media-content {
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.8)};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s linear;
    transform: scale(0);
    padding: 12px;
  }

  & .icon {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 50%;

    & svg {
      font-size: 16px;
    }
  }
  &:hover .card-media-wrapper {
    & .card-media-content {
      transform: scale(1);
    }
  }
`;

export const StyledTitle = styled.h5`
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
export const StyledSecondaryText = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};
`;
