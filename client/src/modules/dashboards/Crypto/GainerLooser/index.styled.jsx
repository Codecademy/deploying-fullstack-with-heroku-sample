import AppTableContainer from '@crema/components/AppTableContainer';
import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledFlex2 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledGainerLooserTable = styled(AppTableContainer)`
  & .ant-table-thead > tr > th {
    border-bottom: 0 none;
    font-size: 13px;
    padding: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;
    color: ${({ theme }) => theme.palette.text.primary};

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir='rtl'] & {
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

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }
  }
`;
