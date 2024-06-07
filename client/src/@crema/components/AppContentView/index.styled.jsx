import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledMainContentView = styled(Content)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 20px 0;
  min-height: auto !important;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 30px 32px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    max-width: 1650px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;
