import styled from 'styled-components';
import AppCard from '@crema/components/AppCard';
import { Button, Input } from 'antd';

export const StyledSubCard = styled(AppCard)`
  background-color: ${({ theme }) => theme.palette.red[6]};
  color: ${({ theme }) => theme.palette.primary.contrastText};

  & .ant-card-head-title {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  & .ant-card-body {
    display: flex;
    flex-direction: column;

    & form {
      margin-top: auto;
    }
  }
`;

export const StyledSubText = styled.p`
  margin-bottom: 24px;
  padding-right: 16px;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 16px;
  }
`;

export const StyledSubFormFieldRow = styled.div`
  display: flex;
  align-items: center;

  & .form-field {
    width: 75%;
  }

  & .form-btn-field {
    width: 25%;
    padding-left: 20px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 20px;
    }
  }
`;

export const StyledSubInput = styled(Input)`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: 1;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  background-color: white !important;
  color: black;
  padding: 9px 14px;
`;

export const StyledSubButton = styled(Button)`
  width: 100%;
  height: 36px;

  span {
    color: white;
  }
`;
