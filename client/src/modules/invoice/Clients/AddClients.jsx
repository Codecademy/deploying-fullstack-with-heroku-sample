import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import AddClient from './AddClient';
import { postDataApi } from '@crema/hooks/APIHooks';
import { StyledTypographyWrapper } from '../index.styled';

const AddClients = () => {
  const navigate = useNavigate();
  const infoViewActionsContext = useInfoViewActionsContext();

  const onSave = (client) => {
    postDataApi('/api/invoice/clients/add', infoViewActionsContext, {
      client,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          'New Client has been created successfully!',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    navigate('/invoice/clients');
  };

  return (
    <StyledTypographyWrapper>
      <AddClient onSave={onSave} />
    </StyledTypographyWrapper>
  );
};

export default AddClients;
