import styled from 'styled-components';
import { FiCalendar } from 'react-icons/fi';

export const StyledTimelineCustom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 499px) {
    justify-content: flex-start;
  }
`;

export const StyledTimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px 0;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin: 40px 0;
  }

  @media (max-width: 499px) {
    min-width: 300px;
    padding-right: 16px;

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 16px;
    }
  }

  &:after {
    background-color: #d5d6d8;
    content: '';
    position: absolute;
    left: calc(50% - 0.5px);
    width: 1px;
    height: 100%;

    [dir='rtl'] & {
      left: auto;
      right: calc(50% - 0.5px);
    }

    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.md - 1}px) {
      left: 30px;

      [dir='rtl'] & {
        left: 0;
        right: 30px;
      }
    }

    @media (max-width: 499px) {
      left: 10px;

      [dir='rtl'] & {
        left: 0;
        right: 10px;
      }
    }
  }
`;

export const StyledTimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 45px;
  position: relative;
  margin: 10px 0;
  width: 50%;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 45px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-right: 65px;

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 65px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md - 1}px) {
    width: 100%;
    padding-right: 0;
    padding-left: 90px;

    [dir='rtl'] & {
      padding-right: 90px;
      padding-left: 0;
    }
  }

  @media (max-width: 499px) {
    padding-left: 50px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 50px;
    }
  }

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 45px;
    padding-right: 0;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 45px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      padding-left: 65px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 65px;
      }
    }

    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.md - 1}px) {
      padding-left: 90px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 90px;
      }
    }

    @media (max-width: 499px) {
      padding-left: 50px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 50px;
      }
    }

    & .timeline-item-content {
      &:after {
        right: auto;
        left: -15px;
        transform: rotate(180deg);

        [dir='rtl'] & {
          right: -15px;
          left: auto;
        }
      }

      & .timeline-circle {
        right: auto;
        left: -60px;

        [dir='rtl'] & {
          right: -60px;
          left: auto;
        }

        @media screen and (min-width: ${({ theme }) =>
            theme.breakpoints.xxl}px) {
          left: -80px;

          [dir='rtl'] & {
            left: auto;
            right: -80px;
          }
        }

        @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.md - 1}px) {
          left: -75px;

          [dir='rtl'] & {
            left: auto;
            right: -75px;
          }
        }

        @media (max-width: 499px) {
          left: -56px;

          [dir='rtl'] & {
            left: auto;
            right: -56px;
          }
        }
      }

      @media screen and (max-width: ${({ theme }) =>
          theme.breakpoints.md - 1}px) {
        padding: 20px;
      }
    }
  }
`;

export const StyledTimelineItemContent = styled.div`
  border-radius: ${({ theme }) => theme.cardRadius};
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: 20px;
  position: relative;
  max-width: 500px;

  &:after {
    content: '';
    position: absolute;
    right: -15px;
    top: calc(50% - 20px);
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 22px solid transparent;
    border-left: 16px solid ${({ theme }) => theme.palette.background.paper};

    [dir='rtl'] & {
      right: auto;
      left: -15px;
      border-left: 0 none;
      border-right: 16px solid ${({ theme }) => theme.palette.background.paper};
    }

    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.md - 1}px) {
      transform: rotate(180deg);
      right: auto;
      left: -15px;

      [dir='rtl'] & {
        right: -15px;
        left: auto;
      }
    }
  }

  @media (max-width: 1023px) {
    max-width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md - 1}px) {
    padding: 20px;
  }
`;

export const StyledTimelineItemHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  & h2 {
    margin-bottom: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

export const StyledTime = styled.time`
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.palette.gray[500]};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledTimeCalendarIcon = styled(FiCalendar)`
  margin-right: 8px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledTimelineTag = styled.span`
  padding: 8px 16px;
  margin-left: auto;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.base};
  border-radius: ${({ theme }) => theme.cardRadius};
  text-transform: capitalize;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledTimelineText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const StyledTimelineItemFooter = styled.div`
  text-align: center;
  margin: 20px -20px -20px;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
`;

export const StyledTimelineLink = styled.a`
  color: ${({ theme }) => theme.palette.secondary.main};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const StyledTimelineCircle = styled.span`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: solid 2px ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  position: absolute;
  top: calc(50% - 15px);
  right: -60px;
  width: 30px;
  height: 30px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  [dir='rtl'] & {
    right: auto;
    left: -60px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    right: -80px;

    [dir='rtl'] & {
      right: auto;
      left: -80px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md - 1}px) {
    right: auto;
    left: -75px;

    [dir='rtl'] & {
      right: -75px;
      left: auto;
    }
  }

  @media (max-width: 499px) {
    left: -56px;

    [dir='rtl'] & {
      left: auto;
      right: -56px;
    }
  }
`;

export const StyledTimelineCircleInner = styled.span`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  width: 16px;
  height: 16px;
`;
