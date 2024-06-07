import { Typography } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -8px;
  margin-right: -8px;
`;

export const StyledCoinsWrapper = styled.div`
  padding: 0 8px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-bottom: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-bottom: 0;
  }
`;

export const StyledSecondaryText = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledTitle = styled(Typography.Title)`
  font-size: 18px !important;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: 0 !important;
`;

export const StyledTimeWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 4px;
  cursor: pointer;
  width: 50px;
  height: 35px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px ${({ theme }) => theme.palette.dividerColor};
  border-radius: 10px;
  &.active {
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.3)};
  }
`;
