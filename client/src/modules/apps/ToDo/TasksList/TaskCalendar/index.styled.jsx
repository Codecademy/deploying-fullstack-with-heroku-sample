import { Modal } from 'antd';
import styled from 'styled-components';

export const StyledTodoEvents = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & .ant-badge-status {
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const StyledTaskCalenderModal = styled(Modal)`
  & .ant-modal-body {
    padding: 0;
  }
`;
