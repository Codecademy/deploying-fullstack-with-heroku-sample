import React from 'react';
import { Space, Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const SwitchTextIcon = () => {
  return (
    <Space>
      <Switch checkedChildren='开启' unCheckedChildren='关闭' defaultChecked />
      <br />
      <Switch checkedChildren='1' unCheckedChildren='0' />
      <br />
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
    </Space>
  );
};

export default SwitchTextIcon;
