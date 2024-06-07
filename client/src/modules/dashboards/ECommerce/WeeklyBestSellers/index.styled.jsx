import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
`;

export const StyledFlexWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledFlexContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledFlexContainer2 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledSecondary = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 0;
`;

export const StyledBadgeRoot = styled.div`
  background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.2)};
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 3px 10px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-left: 8px;
`;
