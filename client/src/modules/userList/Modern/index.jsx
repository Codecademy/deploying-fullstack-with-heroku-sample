import React from 'react';
import ListItem from './ListItem';
import AppList from '@crema/components/AppList';
import AppInfoView from '@crema/components/AppInfoView';
import { StyledUserModern } from './index.styled';
import { useGetDataApi } from '@crema/hooks/APIHooks';

const Modern = () => {
  const [{ apiData: usersList }] = useGetDataApi('/api/user/list', []);

  return (
    <StyledUserModern>
      {usersList ? (
        <AppList
          interval={120}
          type='top'
          data={usersList}
          renderItem={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      ) : null}
      <AppInfoView />
    </StyledUserModern>
  );
};

export default Modern;
