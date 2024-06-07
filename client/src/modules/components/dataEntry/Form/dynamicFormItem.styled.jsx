import { MinusCircleOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import styled from 'styled-components';

export const StyledDynamicForm = styled(Form)`
  max-width: 600px;
  width: 100%;
`;

export const StyledDynamicDeleteButton = styled(MinusCircleOutlined)`
  position: relative;
  top: 4px;
  margin: 0 8px;
  color: #999;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #777;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
