import styled from 'styled-components';

export const StyledDot = styled.div`
  margin-top: 6px;
  min-width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const StyledContent = styled.div`
  margin-left: 8px;
  overflow: hidden;
`;

export const StyledSecondary = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 0;
`;

export const StyledTopInquiries = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: -8px;
  margin-right: -8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }

  & .top-inquiry-col {
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 50%;
      display: flex;
      align-items: center;
    }
    & > div {
      width: 100%;
    }
  }

  & .top-inquiry-chart {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      justify-content: center;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
