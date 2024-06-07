import { PageHeader } from '@ant-design/pro-layout';
import React from 'react';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const UseWithBreadcrumbs = () => {
  return (
    <PageHeader
      className='site-page-header'
      title='Title'
      breadcrumb={{ routes }}
      subTitle='This is a subtitle'
    />
  );
};

export default UseWithBreadcrumbs;
