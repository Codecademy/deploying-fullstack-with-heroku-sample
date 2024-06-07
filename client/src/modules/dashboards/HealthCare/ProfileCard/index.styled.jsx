import styled from 'styled-components';

export const StyledProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .title {
    padding: 12px;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.font.size.base};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-bottom: 16px;
      margin-top: 8px;
    }
  }
`;

export const StyledProfileContentAction = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledProfileActionItem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const StyledProfileActionItemContent = styled.div`
  padding: 20px 8px;
  width: 50%;
  color: ${({ theme }) => theme.palette.text.secondary};

  & h5 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.font.size.base};
    margin-bottom: 0;
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledProfileActionItemContentRight = styled.div`
  padding: 20px 8px;
  width: 50%;
  color: ${({ theme }) => theme.palette.text.secondary};
  border-right: 1px solid rgba(0, 0, 0, 0.12);

  & h5 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.font.size.base};
    margin-bottom: 0;
  }

  & p {
    margin-bottom: 0;
  }

  [dir='rtl'] & {
    border-right: 0 none;
    border-left: 1px solid rgba(0, 0, 0, 0.12);
  }
`;

export const StyledProfileActionItemTopBorder = styled(StyledProfileActionItem)`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;
