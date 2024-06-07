import React from 'react';

const AppInfoViewContext = React.lazy(() => import('./ContextView'));
// const AppInfoViewRedux = React.lazy(() => import('./ReduxView'));

const AppInfoView = () => {
  if (import.meta.env.VITE_STATE_TYPE === 'context') {
    return <AppInfoViewContext />;
  }
  // return <AppInfoViewRedux />;
  return <div>AppInfoViewRedux</div>
};

export default AppInfoView;
