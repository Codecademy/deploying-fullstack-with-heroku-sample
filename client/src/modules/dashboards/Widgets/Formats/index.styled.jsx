import { Radio } from 'antd';
import styled from 'styled-components';

export const StyledFormatRadioGroup = styled(Radio.Group)`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & .ant-radio-wrapper {
    width: 50%;
    margin-bottom: 20px;
    margin-right: 0;
    padding-right: 12px;

    [dir='rtl'] & {
      margin-left: 0;
      padding-right: 0;
      padding-left: 12px;
    }
  }

  & .ant-radio {
    margin-right: 8px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 8px;
    }
  }
`;
