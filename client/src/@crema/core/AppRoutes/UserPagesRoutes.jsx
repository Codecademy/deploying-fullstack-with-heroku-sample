import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const Signin = React.lazy(() =>
  import('../../../modules/userPages/UserPages/Signin'),
);
const Signup = React.lazy(() =>
  import('../../../modules/userPages/UserPages/Signup'),
);
const ForgetPassword = React.lazy(() =>
  import('../../../modules/userPages/UserPages/ForgetPassword'),
);
const ResetPassword = React.lazy(() =>
  import('../../../modules/userPages/UserPages/ResetPassword'),
);
const UnlockScreen = React.lazy(() =>
  import('../../../modules/userPages/UserPages/UnlockScreen'),
);
const StyledSignin = React.lazy(() =>
  import('../../../modules/userPages/StyledUserPages/Signin'),
);
const StyledSignup = React.lazy(() =>
  import('../../../modules/userPages/StyledUserPages/Signup'),
);
const StyledForgetPassword = React.lazy(() =>
  import('../../../modules/userPages/StyledUserPages/ForgetPassword'),
);
const StyledResetPassword = React.lazy(() =>
  import('../../../modules/userPages/StyledUserPages/ResetPassword'),
);
const StyledUnlockScreen = React.lazy(() =>
  import('../../../modules/userPages/StyledUserPages/UnlockScreen'),
);

export const userPagesConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/user/sign-in-1',
    element: <Signin />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/user/sign-in-2',
    element: <StyledSignin />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/user/sign-up-1',
    element: <Signup />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/user/sign-up-2',
    element: <StyledSignup />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/user/forgot-password-1',
    element: <ForgetPassword />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/user/forgot-password-2',
    element: <StyledForgetPassword />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/user/reset-password-1',
    element: <ResetPassword />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/user/reset-password-2',
    element: <StyledResetPassword />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/user/lock-1',
    element: <UnlockScreen />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/user/lock-2',
    element: <StyledUnlockScreen />,
  },
];
