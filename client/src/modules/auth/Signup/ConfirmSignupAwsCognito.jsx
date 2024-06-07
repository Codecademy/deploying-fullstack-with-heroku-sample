import React, { useState } from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import ReactCodeInput from 'react-code-input';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import AppPageMeta from '@crema/components/AppPageMeta';
import AuthWrapper from '../AuthWrapper';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import {
  StyledAuthReconContent,
  StyledConfirmBtn,
  StyledConfirmCodeInput,
  StyledConfirmContent,
} from '../AuthWrapper.styled';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';

const ConfirmSignupAwsCognito = () => {
  const { fetchError } = useInfoViewActionsContext();
  const { confirmCognitoUserSignup } = useAuthMethod();
  const navigate = useNavigate();
  const location = useLocation();

  const { messages } = useIntl();
  const handleSubmit = () => {
    const { email } = location.state || {};
    if (email && pin.length === 6) {
      confirmCognitoUserSignup(email, pin);
    } else if (!email) {
      navigate('/signup');
      fetchError(messages['validation.tryAgain']);
    } else {
      fetchError(messages['validation.pinLength']);
    }
  };
  const [pin, setPin] = useState('');

  return (
    <AuthWrapper>
      <AppPageMeta title='Confirm Signup' />

      <StyledAuthReconContent>
        <StyledConfirmContent>
          <p>
            <IntlMessages id='common.verificationMessage' />
          </p>
        </StyledConfirmContent>

        <StyledConfirmCodeInput>
          <ReactCodeInput
            type='password'
            value={pin}
            fields={6}
            onChange={(value) => setPin(value)}
          />
        </StyledConfirmCodeInput>

        <StyledConfirmBtn type='primary' onClick={handleSubmit}>
          <IntlMessages id='common.submit' />
        </StyledConfirmBtn>
      </StyledAuthReconContent>
    </AuthWrapper>
  );
};

export default ConfirmSignupAwsCognito;
