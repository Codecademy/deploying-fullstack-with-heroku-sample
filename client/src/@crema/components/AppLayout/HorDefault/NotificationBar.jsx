import React from 'react';
import { StyledHeaderAlert } from './index.styled';

export default function NotificationBar() {
  const onClose = () => {
    console.log('I was closed.');
  };

  return (
    <StyledHeaderAlert
      message=' Get flat 60% off on your first purchase'
      type='warning'
      closable
      onClose={onClose}
    />
  );
}
