import React from 'react';
import { Input, Select, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { StyledSelectAfter, StyledSelectBefore } from './PostTab.styled';

const { Option } = Select;

const selectBefore = (
  <StyledSelectBefore defaultValue='http://'>
    <Option value='http://'>http://</Option>
    <Option value='https://'>https://</Option>
  </StyledSelectBefore>
);
const selectAfter = (
  <StyledSelectAfter defaultValue='.com'>
    <Option value='.com'>.com</Option>
    <Option value='.jp'>.jp</Option>
    <Option value='.cn'>.cn</Option>
    <Option value='.org'>.org</Option>
  </StyledSelectAfter>
);

const PostTab = () => {
  return (
    <Space direction='vertical'>
      <div style={{ marginBottom: 16 }}>
        <Input addonBefore='http://' addonAfter='.com' defaultValue='mysite' />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input
          addonBefore={selectBefore}
          addonAfter={selectAfter}
          defaultValue='mysite'
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input addonAfter={<SettingOutlined />} defaultValue='mysite' />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input addonBefore='http://' suffix='.com' defaultValue='mysite' />
      </div>
    </Space>
  );
};

export default PostTab;
