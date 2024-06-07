import { Avatar, Form } from 'antd';
import styled from 'styled-components';

export const StyledInfoUpload = styled(Form.Item)`
  margin-bottom: 20px;

  & .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
  }
`;

export const StyledInfoUploadAvatar = styled(Avatar)`
  margin-right: 16px;
  width: 50px;
  height: 50px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 64px;
    height: 64px;
  }
`;

export const StyledInfoUploadContent = styled.div`
  flex: 1;
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.palette.text.secondary};

  & p {
    margin-bottom: 0;
  }
`;

export const StyledInfoUploadBtnView = styled.div`
  margin-bottom: 6px;
  display: flex;
  align-items: center;

  & .dropzone {
    margin-right: 10px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 10px;
    }
  }

  & .ant-btn {
    height: 30px;
    padding: 3.5px 12px;
  }
`;
