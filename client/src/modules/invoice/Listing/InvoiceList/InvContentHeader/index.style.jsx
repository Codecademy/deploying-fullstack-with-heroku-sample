import { Checkbox } from 'antd';
import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: row;
`;

export const StyledCheckbox = styled(Checkbox)`
  margin-right: 10px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 10px;
  }
`;
