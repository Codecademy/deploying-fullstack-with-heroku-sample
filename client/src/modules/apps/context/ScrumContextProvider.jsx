import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';

const ScrumContext = createContext();
const ScrumActionsContext = createContext();

export const useScrumContext = () => useContext(ScrumContext);

export const useScrumActionsContext = () => useContext(ScrumActionsContext);

export const ScrumContextProvider = ({ children }) => {
  const [{ apiData: boardList }, { setData }] = useGetDataApi(
    '/api/scrumboard/board/list',
    [],
  );

  const [{ apiData: labelList }] = useGetDataApi(
    '/api/scrumboard/label/list',
    [],
  );
  const [{ apiData: memberList }] = useGetDataApi(
    '/api/scrumboard/member/list',
    [],
  );

  return (
    <ScrumContext.Provider
      value={{
        boardList,
        labelList,
        memberList,
      }}
    >
      <ScrumActionsContext.Provider
        value={{
          setData,
        }}
      >
        {children}
      </ScrumActionsContext.Provider>
    </ScrumContext.Provider>
  );
};
export default ScrumContextProvider;

ScrumContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
