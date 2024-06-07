import { PageHeader } from '@ant-design/pro-layout';
import { Button, Descriptions, Statistic, Tabs } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const renderContent = (column = 2) => (
  <Descriptions size='small' column={column}>
    <Descriptions.Item label='Created'>Lili Qu</Descriptions.Item>
    <Descriptions.Item label='Association'>
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label='Creation Time'>2017-01-10</Descriptions.Item>
    <Descriptions.Item label='Effective Time'>2017-10-10</Descriptions.Item>
    <Descriptions.Item label='Remarks'>
      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end',
    }}
  >
    <Statistic
      title='Status'
      value='Pending'
      style={{
        marginRight: 32,
      }}
    />
    <Statistic title='Price' prefix='$' value={568.08} />
  </div>
);

const Content = ({ children, extra }) => (
  <div className='content'>
    <div className='main'>{children}</div>
    <div className='extra'>{extra}</div>
  </div>
);
Content.propTypes = {
  children: PropTypes.any,
  extra: PropTypes.any,
};

const Responsive = () => {
  return (
    <PageHeader
      className='site-page-header-responsive'
      onBack={() => window.history.back()}
      title='Title'
      subTitle='This is a subtitle'
      extra={[
        <Button key='3'>Operation</Button>,
        <Button key='2'>Operation</Button>,
        <Button key='1' type='primary'>
          Primary
        </Button>,
      ]}
      footer={
        <Tabs
          defaultActiveKey='1'
          items={[
            { key: '1', label: 'Details' },
            { key: '2', label: 'Rule' },
          ]}
        />
      }
    >
      <Content extra={extraContent}>{renderContent()}</Content>
    </PageHeader>
  );
};

export default Responsive;
