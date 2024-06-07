import { Button, Radio } from 'antd';
import styled from 'styled-components';

export const StyledCheckoutCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 0;
`;

export const StyledCheckoutOrderSummary = styled.div`
  margin-bottom: 32px;
`;

export const StyledPaymentInfoItem = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const StyledPayRadioMode = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledPayModeContent = styled.div`
  position: relative;
  margin-top: 16px;
  color: ${({ theme }) => theme.palette.text.secondary};

  & p {
    margin-bottom: 0;
  }

  & .form-field {
    margin-bottom: 10px;
  }
`;

export const StyledPayModeFormField = styled.div`
  display: flex;
  margin-left: -6px;
  margin-right: -6px;

  & .form-field {
    margin-bottom: 10px;
    width: 50%;
    padding-left: 6px;
    padding-right: 6px;
  }
`;

export const StyledDeliveryAddrCell = styled.div`
  padding: 18px 20px 10px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: ${({ theme }) => theme.cardRadius};
`;

export const StyledDeliveryAddrRow = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  flex-direction: column;
  position: relative;
  padding-right: 45px;
  margin-bottom: 5px;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 45px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    align-items: center;
  }

  & p {
    margin-left: 40px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 40px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      margin-left: 0;

      [dir='rtl'] & {
        margin-right: 0;
      }
    }
  }
`;

export const StyledDeliveryRadio = styled(Radio)`
  position: relative;

  & .ant-radio {
    margin-right: 8px;
    margin-left: 8px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-right: 24px;

      [dir='rtl'] & {
        margin-right: 8px;
        margin-left: 24px;
      }
    }
  }
`;

export const StyledDeliveryEditBtn = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.text.primary};
  box-shadow: none;
  border: 0 none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  width: 30px;
  height: 30px;
  padding: 5px;
  position: absolute;
  right: 0;
  top: 0;

  [dir='rtl'] & {
    right: auto;
    left: 0;
  }
`;

export const StyledDeliveryAddressItem = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-left: 40px;
  margin-bottom: 16px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-left: 56px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 56px;
    }
  }

  & .ant-btn {
    height: 36px;
  }
`;
