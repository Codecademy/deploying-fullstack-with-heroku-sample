import { Card } from "antd";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  position: relative;
  box-shadow: ${({ theme }) => theme.cardShadow} !important;
  border-radius: ${({ theme }) => theme.cardRadius};
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};

  & .ant-card-head-title {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  & > .ant-card-head {
    min-height: 10px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 0 none;
    margin-bottom: 0;

    & .ant-card-head-title {
      line-height: 1.4993rem;
      padding: 12px 0 0 0;
    }

    & .ant-card-extra {
      padding-bottom: 4px;
      padding-top: 8px !important;

      & a {
        color: ${({ theme }) => theme.palette.secondary.main};
      }
    }
  }

  & > .ant-card-body {
    padding: 8px 20px 16px 20px;
  }

  &.heightFull {
    height: 100%;

    & .ant-card-body {
      flex: 1;
    }
  }

  & .ant-card-actions {
    background-color: transparent;
    padding-top: 16px !important;
  }

  &.no-card-space {
    & .ant-card-body {
      padding: 0;
    }
  }

  &.no-card-space-ltr-rtl {
    & .ant-card-body {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
