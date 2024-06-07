import styled from 'styled-components';
import { lighten } from 'polished';
import AppCard from '@crema/components/AppCard';
import { Typography } from 'antd';

export const StyledMediaWrapper = styled.div`
  margin-left: -10px;
  margin-right: -10px;

  & .slick-slider {
    padding-bottom: 8px;
  }

  & .slick-dots {
    bottom: -9px;

    & li {
      width: 10px;
      height: 10px;

      & button {
        width: 10px;
        height: 10px;
        padding: 0;

        &::before {
          font-size: 0;
          background-color: ${({ theme }) => lighten(0.5, theme.palette.black)};
          width: 10px;
          height: 10px;
          border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
        }
      }
    }
  }
`;

export const StyledAppCard = styled(AppCard)`
  border: 1px solid ${({ theme }) => theme.palette.dividerColor};
  box-shadow: 0px 6px 10px rgba(160, 165, 185, 0.1);
  border-radius: 4px;
`;

export const StyledTeamTitle = styled(Typography.Title)`
  margin-bottom: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 18px;
  }
`;

export const StyledTeamDesc = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledCardTitle = styled(Typography.Title)`
  font-weight: ${({ theme }) => theme.font.weight.bold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 18px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 20px;
  }
`;

export const StyledMemberItem = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;
