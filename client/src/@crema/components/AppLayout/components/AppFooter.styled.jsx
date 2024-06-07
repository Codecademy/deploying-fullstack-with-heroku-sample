import { Button, Layout } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;

export const StyledMainFooter = styled(Footer)`
  display: flex;
  align-items: center;
  padding: 5.5px 20px !important;
  color: ${({ theme }) => theme.palette.text.primary} !important;
  background-color: ${({ theme }) => theme.palette.background.paper} !important;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 10.5px 32px !important;
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledFooterBtnView = styled.div`
  margin-left: auto;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledFooterBtn = styled(Button)`
  box-shadow: none;
  height: auto;
`;
