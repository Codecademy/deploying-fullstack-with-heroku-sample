import React from 'react';
import InjectMassage from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';

const MenuLevel = () => {
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <div
        style={{
          fontSize: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <InjectMassage id='sidebar.multiLevel' />
      </div>
    </AppAnimate>
  );
};

export default MenuLevel;
