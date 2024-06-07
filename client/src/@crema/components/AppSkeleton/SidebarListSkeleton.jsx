import React from 'react';
import ContentLoader from 'react-content-loader';

const SidebarItem = () => (
  <ContentLoader viewBox='0 0 200 45'>
    <rect x='0' y='10' rx='0' ry='0' width='20' height='20' />
    <rect x='35' y='12' rx='2' ry='2' width='100' height='15' />
  </ContentLoader>
);
const SidebarListSkeleton = () => {
  return (
    <React.Fragment>
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
    </React.Fragment>
  );
};

export default SidebarListSkeleton;
