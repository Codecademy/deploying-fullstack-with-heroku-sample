import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';
import Account from '../../../modules/account/MyProfile';

export const accountPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/my-profile',
    element: <Account />,
  },
];
