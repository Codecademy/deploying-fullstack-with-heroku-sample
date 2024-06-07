import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;

  h5 {
    margin: 0 !important;
    font-size: ${({ theme }) => theme.font.size.base} !important;
    font-weight: ${({ theme }) => theme.font.weight.medium} !important;
  }
`;

export const StyledNumberWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.2)};
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-right: 14px;
`;
