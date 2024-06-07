import { darken } from 'polished';
import styled from 'styled-components';

export const StyledEmptyListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: ${({ theme }) => theme.cardRadius};
  min-height: 450px;
  height: 100%;
  padding: 20px;
  //border: @border-style-base @border-width-base darken(@border-color-base, 5);
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.palette.text.hint};

  & p {
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  & h4 {
    font-size: 18px;
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 12px;
  }
`;

export const StyledEmptyListContainerFlex = styled(StyledEmptyListContainer)`
  flex-direction: row;
`;

export const StyledListFooter = styled.div`
  padding: 10px;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: flex;
  justify-content: center;
`;

export const StyledLoaderProgress = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  padding: 8px;

  border-top: 1px solid
    ${({ theme }) => darken(0.02, theme.palette.borderColor)};
  box-sizing: border-box;

  & span {
    margin-left: 8px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 8px;
    }
  }
`;
