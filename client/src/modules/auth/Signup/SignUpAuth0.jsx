import React from 'react';

import IntlMessages from '@crema/helpers/IntlMessages';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import {
  StyledSign,
  StyledSignBtnFull,
  StyledSignContent,
} from '../Signin/index.styled';

const SignUpAuth0 = () => {
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

export default SignUpAuth0;
