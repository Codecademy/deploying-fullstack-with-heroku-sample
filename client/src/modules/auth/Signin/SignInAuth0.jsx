import React from 'react';

import IntlMessages from '@crema/helpers/IntlMessages';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import {
  StyledSign,
  StyledSignBtnFull,
  StyledSignContent,
} from './index.styled';

const SignInAuth0 = () => {
  const signInUser = useAuthMethod();

  return (
    <StyledSign>
      <StyledSignContent>
        <StyledSignBtnFull type='primary' onClick={() => signInUser()}>
          <IntlMessages id='auth.loginWithAuth0' />
        </StyledSignBtnFull>
      </StyledSignContent>
    </StyledSign>
  );
};

export default SignInAuth0;
