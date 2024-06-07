import React from 'react';
import ContentLoader from 'react-content-loader';

export const MailItem = () => (
  <ContentLoader viewBox='10 0 430 25'>
    <rect x='15' y='10' rx='0' ry='0' width='10' height='10' />
    <rect x='30' y='10' rx='10' ry='10' width='10' height='10' />
    <rect x='50' y='10' rx='0' ry='0' width='40' height='10' />
    <rect x='100' y='10' rx='0' ry='0' width='300' height='10' />
    <rect x='410' y='10' rx='0' ry='0' width='20' height='10' />
  </ContentLoader>
);
const EmailListSkeleton = () => {
  return (
    <React.Fragment>
      <MailItem />
      <MailItem />
      <MailItem />
      <MailItem />
      <MailItem />
      <MailItem />
      <MailItem />
      <MailItem />
      <MailItem />
      <MailItem />
    </React.Fragment>
  );
};

export default EmailListSkeleton;
