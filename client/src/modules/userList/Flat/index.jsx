import React from 'react';
import AppInfoView from '@crema/components/AppInfoView';
import { StyledUserFlat } from './index.styled';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import AppList from '@crema/components/AppList';
import ListItem from './ListItem/index';

const Flat = () => {
  const [{ apiData: usersList }] = useGetDataApi('/api/user/list', []);

  return (
    <StyledUserFlat>
      {usersList ? (
        <AppList
          type='top'
          interval={120}
          data={usersList}
          renderItem={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      ) : null}
      <AppInfoView />
    </StyledUserFlat>
  );
};

export default Flat;
