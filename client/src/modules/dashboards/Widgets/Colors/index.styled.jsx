import AppScrollbar from '@crema/components/AppScrollbar';
import { Checkbox, List } from 'antd';
import styled from 'styled-components';

export const StyledColorItem = styled(List.Item)`
  display: flex;
  align-items: center;
  padding: 12px 20px !important;
  border-bottom: 0 none !important;
  justify-content: flex-start;

  & .ant-checkbox {
    top: 0;
  }

  & span {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const StyledColorCheckbox = styled(Checkbox)`
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const StyledColorScrollbar = styled(AppScrollbar)`
  height: 345px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    height: 300px;
  }
`;
