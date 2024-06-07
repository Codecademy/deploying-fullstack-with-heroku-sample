import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledInvoice = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInvoiceContainer = styled.div`
  flex: 1;
  max-width: 900px;
  width: 100%;
`;

export const StyledInvoiceFooterTitle = styled.h4`
  margin-bottom: 22px;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 16px;
  }
`;

export const StyledInvoiceCard = styled(AppCard)`
  margin-bottom: 24px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-top: 32px;
  }
`;

export const StyledInvoiceHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 40px 32px;
    margin-bottom: 32px;
  }
`;

export const StyledInvoiceLogo = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 32px;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 0;
    margin-right: 40px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 40px;
    }
  }

  & img {
    display: inline-block;
    width: 100px;

    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.sm - 1}px) {
      width: 60px;
    }
  }
`;

export const StyledInvoiceHeaderRow = styled.div`
  margin-left: -12px;
  margin-right: -12px;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }
`;

export const StyledInvoiceHeaderItem = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 12px;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 0;
    text-align: left;

    [dir='rtl'] & {
      text-align: right;
    }
  }

  &:last-child {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      text-align: right;

      [dir='rtl'] & {
        text-align: left;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      text-align: left;

      [dir='rtl'] & {
        text-align: right;
      }
    }
  }

  & h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.palette.gray[700]};
    margin-bottom: 4px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & p {
    margin-bottom: 4px;
  }
`;
