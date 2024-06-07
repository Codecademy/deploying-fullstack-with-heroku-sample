import styled from 'styled-components';

export const StyledSecondaryText = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledSecondaryText1 = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledShadowWrapper = styled.div`
  border: 1px solid #eaecf0;
  padding: 24px;
  border-radius: 12px;
  box-shadow:
    0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
`;

export const StyledFormWrapper = styled.div`
  .ant-select,
  .ant-input-number,
  .ant-input-number-group-wrapper {
    width: 100%;
  }

  .notification {
    margin-left: 10px;
  }

  .ant-card,
  .mb-20,
  .ant-select {
    margin-bottom: 20px;
  }
`;
