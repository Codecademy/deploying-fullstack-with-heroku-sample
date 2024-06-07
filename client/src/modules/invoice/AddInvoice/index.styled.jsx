import styled from 'styled-components';

export const StyledClientWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 12px;
  width: 80%;

  .closeBtn {
    display: none;
  }
  &:hover {
    border: solid 1px ${({ theme }) => theme.palette.dividerColor};
    .closeBtn {
      display: block;
    }
  }
`;

export const StyledCloseBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const StyledInumWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 4px;

  span {
    min-width: 70px;
  }

  &:hover {
    border: 1px solid
      ${(props) =>
        props.editInum ? 'none' : ({ theme }) => theme.palette.dividerColor};
  }
`;

export const StyledItdWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 4px;

  span {
    min-width: 70px;
  }

  &:hover {
    border: 1px solid
      ${(props) =>
        props.editIdt ? 'none' : ({ theme }) => theme.palette.dividerColor};
  }
`;

export const StyledDueWrapper = styled.div`
  border-radius: 8px;
  padding: 4px;

  &:hover {
    border: 1px solid
      ${(props) =>
        props.editDueDays ? 'none' : ({ theme }) => theme.palette.dividerColor};
  }
`;

export const StyledPrimaryText = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledPrimaryText2 = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const StyledBankAccountWrapper = styled.div`
  position: relative;
  padding: 12px;
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.dividerColor};
  width: fit-content;
`;
