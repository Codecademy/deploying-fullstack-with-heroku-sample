import { Card, Typography } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  height: 100%;
  background-color: ${({ theme }) =>
    rgba(theme.palette.primary.main, 0.11)} !important;
  .ant-card-body {
    padding: 0;
    display: flex;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
      flex-direction: column;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      flex-direction: row;
    }
  }
`;

export const StyledCardMedia = styled.img`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 50%;
  }
`;

export const StyledCardWraper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: 100%;
    padding: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 30px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding: 60px;
  }
`;

export const StyledTitleWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 48px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    margin-bottom: 60px;
  }
`;

export const StyledPrimarySubTitle = styled(Typography.Title)`
  color: ${({ theme }) => theme.palette.primary.main}!important;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const StyledPrimaryTitle = styled(Typography.Title)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 16px !important;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 24px !important;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 22px !important;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 28px !important;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    font-size: 30px !important;
  }
`;

export const StyledIntroWrapper = styled.div`
  & .introduction-item {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
      margin-bottom: 12px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      margin-bottom: 24px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-bottom: 12px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      margin-bottom: 32px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      margin-bottom: 40px;
    }

    &:not(:last-of-type) {
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
        margin-bottom: 20px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        margin-bottom: 32px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        margin-bottom: 16px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
        margin-bottom: 40px;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
        margin-bottom: 48px;
      }
    }
  }
`;

export const StyledIntroTitle = styled(Typography.Title)`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const StyledIntroDesc = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 12px;
  }
`;
