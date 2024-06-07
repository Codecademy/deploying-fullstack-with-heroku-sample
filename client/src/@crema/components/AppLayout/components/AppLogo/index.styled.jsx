import styled from 'styled-components';

export const StyledAppLogo = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;

  & img {
    height: 50px;
    margin-right: 10px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 10px;
    }
  }
`;
