import AppTableContainer from '@crema/components/AppTableContainer';
import styled from 'styled-components';

export const StyledMarketingUserInfo = styled.div`
  display: flex;
  align-items: center;

  & .ant-avatar {
    width: 40px;
    height: 40px;
    margin-right: 14px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 14px;
    }
  }
`;

export const StyledMarketingUserInfoContent = styled.div`
  font-size: 13px;
  flex: 1;

  & h3 {
    margin-bottom: 2px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 0;
  }
`;

export const StyledGraphItem = styled.div`
  & span {
    margin-right: 8px;
    display: inline-block;
    color: ${({ theme }) => theme.palette.text.secondary};

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;

export const StyledMarketingCampaignTable = styled(AppTableContainer)`
  & .ant-table-thead > tr > th {
    font-size: 13px;
    padding: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;

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
    padding: 8px;

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
