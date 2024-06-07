import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledBeautifulDnd = styled.div`
  margin-right: 12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;

export const StyledBeautifulDndListItem = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: 8px;
  width: 16rem;
  margin-right: 8px;
  display: flex;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledBeautifulDndAvatar = styled(Avatar)`
  margin-right: 12px;
  margin-top: 0;
  margin-left: 6px;
  display: flex;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;

  [dir='rtl'] & {
    margin-right: 6px;
    margin-left: 12px;
  }
`;

export const StyledBeautifulDndContent = styled.div`
  position: relative;
  color: ${({ theme }) => theme.palette.text.secondary};

  & h3 {
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 0;
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledMultipleDrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const StyledMultipleDropitem = styled.div`
  position: relative;
`;
export const StyledMultipleDropListitem = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.palette.background.paper} !important;
  display: flex;
  margin-bottom: 0 !important;

  &:not(:last-child) {
    margin-bottom: 20px !important;
  }
`;

export const StyledSimpleDnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledSimpleDndListItem = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  margin-bottom: 20px;
  display: flex;
`;

export const StyledWithHooks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHookDndListItem = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  display: flex;
`;

export const StyledWithHookRoot = styled.div`
  padding: 8px;
  margin-bottom: 12px;
  border: solid 4px ${({ theme }) => theme.palette.borderColor};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md - 1}px) {
    width: 100%;

    & .css-1gwkzgr {
      width: 100%;
    }
  }
`;
