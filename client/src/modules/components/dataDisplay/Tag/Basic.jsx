import React from 'react';
import { Space, Tag } from 'antd';

const Basic = () => {
  function log(e) {
    console.log(e);
  }

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <Space wrap>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href='https://github.com/ant-design/ant-design/issues/1862'>Link</a>
      </Tag>
      <Tag closable onClose={log}>
        Tag 2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
    </Space>
  );
};

export default Basic;
