import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useLocation } from 'react-router-dom';

const ContactContext = createContext();
const ContactActionsContext = createContext();

export const useContactContext = () => useContext(ContactContext);

export const useContactActionsContext = () => useContext(ContactActionsContext);

export const ContactContextProvider = ({ children }) => {
  const [{ apiData: labelList }] = useGetDataApi(
    '/api/contactApp/labels/list',
    [],
  );

  const [{ apiData: folderList }] = useGetDataApi(
    '/api/contactApp/folders/list',
    [],
  );

  const [pageView, setPageView] = useState('list');
  const { pathname } = useLocation();

  const [page, setPage] = useState(1);

  const [
    { apiData: contactList, loading },
    { setQueryParams, setData: setContactData, reCallAPI },
  ] = useGetDataApi('/api/contactApp/contact/List', {}, {}, false);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    setQueryParams({
      type: path[path.length - 2],
      name: path[path.length - 1],
      page: page,
    });
  }, [pathname, page]);

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const onChangePageView = (view) => {
    setPageView(view);
  };

  return (
    <ContactContext.Provider
      value={{
        labelList,
        folderList,
        contactList,
        loading,
        page,
        pageView,
      }}
    >
      <ContactActionsContext.Provider
        value={{
          setContactData,
          onPageChange,
          reCallAPI,
          setPageView,
          onChangePageView,
        }}
      >
        {children}
      </ContactActionsContext.Provider>
    </ContactContext.Provider>
  );
};
export default ContactContextProvider;

ContactContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
