import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledProductListView = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledProductListMainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 100%;
  background-color: ${({ theme }) =>
    rgba(theme.palette.background.default, 0.6)};
`;
