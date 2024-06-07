import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import { useLocation } from "react-router-dom";

const MailContext = createContext();
const MailActionsContext = createContext();

export const useMailContext = () => useContext(MailContext);

export const useMailActionsContext = () => useContext(MailActionsContext);

export const MailContextProvider = ({ children }) => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const [{ apiData: labelList }] = useGetDataApi("/api/mailApp/labels/list");
  const [{ apiData: connectionList }] = useGetDataApi(
    "/api/mailApp/connection/list",
  );
  const [{ apiData: folderList }] = useGetDataApi("/api/mailApp/folders/list");
  const [page, setPage] = useState(0);

  const [
    { apiData: mailList, loading },
    { setQueryParams, setData: setMailData },
  ] = useGetDataApi("/api/mailApp/folder/mail/List", undefined, {}, false);
  console.log("apiData mailList", mailList);
  useEffect(() => {
    setPage(0);
  }, [pathname]);
  useEffect(() => {
    setQueryParams({
      type: path[path.length - 2],
      name: path[path.length - 1],
      page: page,
    });
  }, [page, pathname]);

  const onPageChange = (page) => {
    setPage(page - 1);
  };

  return (
    <MailContext.Provider
      value={{
        labelList,
        connectionList,
        folderList,
        mailList,
        loading,
        page,
      }}
    >
      <MailActionsContext.Provider
        value={{
          setMailData,
          onPageChange,
        }}
      >
        {children}
      </MailActionsContext.Provider>
    </MailContext.Provider>
  );
};
export default MailContextProvider;

MailContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
