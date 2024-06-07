import React, { useEffect } from 'react';
import AppLoader from '../AppLoader';
import {
  useInfoViewActionsContext,
  useInfoViewContext,
} from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { message } from 'antd';

const AppInfoViewContext = () => {
  const { error, loading, displayMessage } = useInfoViewContext();
  const { clearInfoView } = useInfoViewActionsContext();

  useEffect(() => {
    if (error) {
      message.error(error);
      clearInfoView();
    }
  }, [error]);

  useEffect(() => {
    if (displayMessage) {
      message.success(displayMessage);
      clearInfoView();
    }
  }, [displayMessage]);

  return loading ? <AppLoader /> : null;
};

export default AppInfoViewContext;
