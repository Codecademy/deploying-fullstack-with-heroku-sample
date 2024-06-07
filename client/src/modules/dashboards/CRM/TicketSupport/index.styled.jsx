import AppTableContainer from "@crema/components/AppTableContainer";
import styled from "styled-components";

export const StyledTicketSupportUserInfo = styled.div`
  display: flex;
  align-items: center;

  & .ant-avatar {
    width: 40px;
    height: 40px;
    margin-right: 14px;
    background: transparent;

    [dir="rtl"] & {
      margin-right: 0;
      margin-left: 14px;
    }
  }
`;

export const StyledTicketSupportUserInfoContent = styled.div`
  flex: 1;

  & h3 {
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 13px;
  }
`;

export const StyledTicketSupportTable = styled(AppTableContainer)`
  & .ant-table-thead > tr > th {
    border-bottom: 0 none;
    font-size: 13px;
    padding: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;
    color: ${({ theme }) => theme.palette.text.primary};

    &:first-child {
      padding-left: 20px;

      [dir="rtl"] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir="rtl"] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }
  }

  & .ant-table-tbody > tr > td {
    border-bottom: 0 none;
    font-size: 13px;
    padding: 6px 8px;

    &:first-child {
      padding-left: 20px;

      [dir="rtl"] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir="rtl"] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }
  }
`;
