import styled from 'styled-components';

export const StyledOtherFormControlWrapper = styled.div`
  .dropbox {
    height: 180px;
    line-height: 1.5;
  }

  .ant-form-item .ant-form-item-label {
    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.sm - 1}px) {
      line-height: 1.5715;
      padding: 0 0 8px;
      text-align: left;
      white-space: normal;
    }
  }

  .ant-form .ant-form-item .ant-form-item-control,
  .ant-form .ant-form-item .ant-form-item-label {
    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.sm - 1}px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;
