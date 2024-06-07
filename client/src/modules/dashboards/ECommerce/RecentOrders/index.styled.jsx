import AppTableContainer from '@crema/components/AppTableContainer';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledAnChar = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  display: inline-block;
`;

export const StyledBadgeRoot = styled.span`
  padding: 3px 10px;
  border-radius: 4px;
  display: inline-block;
`;

export const StyledOrderTable = styled(AppTableContainer)`
  & .ant-table-thead > tr > th {
    font-size: 13px;
    padding: 10px 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;
    line-height: 1.5;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;
      text-align: center;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 10px 8px;
    line-height: 1.5;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;
      text-align: center;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }
  }
`;

export const StyledAction = styled.div`
  display: flex;

  & .icon-btn {
    height: 24px;
    max-width: 24px;
    min-width: 24px;
    border: 1px solid ${() => rgba('#f84e4e', 0.5)} !important;
    color: ${() => rgba('#f84e4e', 0.5)}!important;
    padding: 3px;
    font-size: 16px;
    &:not(:first-of-type) {
      margin-left: 8px;
    }
  }
  & .icon-btn-eye {
    border: solid 1px
      ${({ theme }) => rgba(theme.palette.primary.main, 0.5)}!important;
    color: ${({ theme }) => rgba(theme.palette.primary.main, 0.5)}!important;
  }
  &:hover {
    & .icon-btn {
      border: solid 1px #f84e4e;
      color: #f84e4e;
    }
    & .icon-btn-eye {
      border: solid 1px ${({ theme }) => theme.palette.primary.main}!important;
      color: ${({ theme }) => theme.palette.primary.main} !important;
    }
  }
`;
