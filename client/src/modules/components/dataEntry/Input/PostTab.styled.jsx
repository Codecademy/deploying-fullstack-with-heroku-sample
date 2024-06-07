import { Select } from 'antd';
import styled from 'styled-components';

export const StyledSelectAfter = styled(Select)`
  width: 80px;
  &[data-theme='compact'] {
    width: 65px;
  }
`;
export const StyledSelectBefore = styled(Select)`
  width: 90px;

  &[data-theme='compact'] {
    width: 71px;
  }
`;
