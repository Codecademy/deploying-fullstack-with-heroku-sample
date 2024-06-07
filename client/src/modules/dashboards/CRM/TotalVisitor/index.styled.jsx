import styled from 'styled-components';

export const StyledListItem = styled.div`
  padding-right: 32px;
  padding-left: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .earning-wrapper {
    display: flex;
    align-items: center;
  }
  & .earning-text {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    font-size: 14px !important;
    font-weight: 500;

    width: calc(100% - 20px);
    /* & > .muitypography-root {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: '100%';
    } */
  }
  & .dot-icon {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

export const StyledEarningGraphWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: -8px;
  margin-right: -8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }

  & text {
    fill: ${({ theme }) => theme.palette.text.primary};
  }
  & .earning-item {
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 46%;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      width: 45%;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      width: 50%;
    }
  }
  & .earning-graph-item {
    padding-left: 0;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 54%;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      width: 55%;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      width: 50%;
    }
  }
`;
