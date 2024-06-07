import React from 'react';
import ContentLoader from 'react-content-loader';

export const ContactItem = (props) => (
  <ContentLoader viewBox='0 0 400 21' {...props}>
    <rect x='10' y='8' rx='3' ry='3' width='10' height='10' />
    <circle cx='32' cy='12' r='8' />
    <rect x='45' y='8' rx='0' ry='0' width='50' height='10' />
    <rect x='120' y='8' rx='0' ry='0' width='70' height='10' />
    <rect x='220' y='8' rx='0' ry='0' width='40' height='10' />
    <rect x='280' y='8' rx='0' ry='0' width='60' height='10' />
    <circle cx='360' cy='12' r='5' />
    <circle cx='380' cy='12' r='5' />
  </ContentLoader>
);
const ContactListSkeleton = () => {
  return (
    <React.Fragment>
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </React.Fragment>
  );
};

export default ContactListSkeleton;
