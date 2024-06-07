import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledHeartRate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;

export const StyledHeartGraphView = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: -30px;
`;

export const StyledHeartGraphItem = styled.div`
  width: 75%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 50%;
  }
`;

export const StyledUnitTitle = styled.div`
  background-color: ${() => rgba('black', 0.04)};
  margin: 0 -20px -16px;
  padding: 12px 20px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    font-size: 24px;
    padding: 8px 20px;
  }

  & span {
    font-size: ${({ theme }) => theme.font.size.lg};
    margin-left: 8px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }
`;
