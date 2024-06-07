import { Form } from 'antd';
import styled from 'styled-components';

export const StyledCustomizedFormControl = styled(Form)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    flex-direction: column;

    &.ant-form-inline .ant-form-item {
      margin-right: 0;
    }

    & .ant-input {
      width: 100% !important;
      margin-right: 0 !important;
      margin-bottom: 12px;
    }

    & .ant-select {
      width: 100% !important;
      margin-bottom: 12px;
    }
  }
`;
