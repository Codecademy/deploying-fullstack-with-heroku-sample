import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const StyledContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-top: 16px;
  }
`;

export const StyledHeaderTitle = styled.div`
  margin-bottom: 12px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-right: 12px;
    flex: 1;

    [dir='rtl'] & {
      padding-right: 0;
      padding-left: 12px;
    }
  }
`;

export const StyledTitleH3 = styled(Title)`
  color: ${({ theme }) => theme.palette.text.primary} !important;
  font-weight: ${({ theme }) => theme.font.weight.medium} !important;
  font-size: 18px !important;
  margin-bottom: 0 !important;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 20px !important;
  }
`;

export const StyledTextBase = styled(Title)`
  font-size: 15px !important;
  font-weight: ${({ theme }) => theme.font.weight.regular}!important;
  color: ${({ theme }) => theme.palette.text.secondary}!important;
  margin: 0 !important;
`;
