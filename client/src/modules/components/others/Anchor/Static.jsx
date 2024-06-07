import React from 'react';
import { Anchor, Space } from 'antd';

const { Link } = Anchor;

const Static = () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Anchor affix={false}>
        <Link href='#basic-demo' title='Basic demo' />
        <Link href='#fixed-demo;' title='Fixed demo' />
        <Link href='#api' title='API'>
          <Link href='#anchor-props' title='Anchor Props' />
          <Link href='#link-props' title='Link Props' />
        </Link>
      </Anchor>
    </Space>
  );
};

export default Static;
