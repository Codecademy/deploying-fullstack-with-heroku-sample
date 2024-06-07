import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledSecondaryText = styled.div`
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};
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

export const StyledAvatar = styled(Avatar)`
  display: block;
  margin: 0 auto;
  img {
    object-fit: contain;
  }
`;
