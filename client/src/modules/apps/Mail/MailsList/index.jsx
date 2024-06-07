import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MailContentHeader from "./MailContentHeader";
import MailListItem from "./MailListItem";
import AppsPagination from "@crema/components/AppsPagination";
import AppsContent from "@crema/components/AppsContainer/AppsContent";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import AppsFooter from "@crema/components/AppsContainer/AppsFooter";
import AppList from "@crema/components/AppList";
import ListEmptyResult from "@crema/components/AppList/ListEmptyResult";
import EmailListSkeleton from "@crema/components/AppSkeleton/EmailListSkeleton";
import {
  StyledAppsMailFooter,
  StyledMailListDesktop,
  StyledMailListMobile,
} from "./index.styled";
import { putDataApi, useGetDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import MailListItemMobile from "./MailListItemMobile";
import {
  useMailActionsContext,
  useMailContext,
} from "../../context/MailContextProvider";

const MailsList = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [filterText, onSetFilterText] = useState("");
  const [page, setPage] = useState(0);
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const infoViewActionsContext = useInfoViewActionsContext();
  const { mailList } = useMailContext();
  const { onPageChange, setMailData } = useMailActionsContext();

  const [checkedMails, setCheckedMails] = useState([]);

  const [{ apiData, loading }, { setQueryParams, setData }] = useGetDataApi(
    "/api/mailApp/folder/mail/List",
    undefined,
    {
      type: path[path.length - 2],
      name: path[path.length - 1],
      page: page,
    },
    false,
  );

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split("/");
    if (setQueryParams) {
      setQueryParams({
        type: path[path.length - 2],
        name: path[path.length - 1],
        page: page,
        checkedMails: checkedMails,
      });
    }
  }, [page, pathname, checkedMails]);
  const onChangeCheckedMails = (checked, id) => {
    if (checked) {
      setCheckedMails(checkedMails.concat(id));
    } else {
      setCheckedMails(checkedMails.filter((mailId) => mailId !== id));
    }
  };

  const onViewMailDetail = (mail) => {
    if (mail.isRead) {
      navigate(`/apps/mail/${params.name}/${mail.id}`);
    } else {
      mail.isRead = true;
      putDataApi("/api/mailApp/mail/", infoViewActionsContext, { mail })
        .then((data) => {
          onUpdateItem(data);
          navigate(`/apps/mail/${params.name}/${mail.id}`);
          infoViewActionsContext.showMessage(
            mail.isRead
              ? "Mail Marked as Read Successfully"
              : "Mail Marked as Unread Successfully",
          );
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };
  const onChange = (page) => {
    setPage(page - 1);
  };

  const onChangeStarred = (checked, mail) => {
    putDataApi("/api/mailApp/update/starred", infoViewActionsContext, {
      mailIds: [mail.id],
      status: checked,
    })
      .then((data) => {
        onUpdateItem(data[0]);
        infoViewActionsContext.showMessage(
          checked
            ? "Mail Marked as Starred Successfully"
            : "Mail Marked as Unstarred Successfully",
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onUpdateItem = (data) => {
    setMailData({
      data: apiData.data.map((item) => {
        if (item.id === data.id) {
          return data;
        }
        return item;
      }),
      count: apiData.count,
    });
  };

  const onRemoveItem = (data) => {
    setMailData({
      data: apiData.data.filter((item) => item.id !== data.id),
      count: apiData.count - 1,
    });
  };
  console.log("mailList: ", mailList);
  return (
    <>
      <AppsHeader>
        <MailContentHeader
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          onChange={onChange}
          mailList={apiData?.data}
          totalMails={apiData?.count}
          page={page + 1}
          path={path}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          setData={setData}
        />
      </AppsHeader>
      <AppsContent>
        <StyledMailListDesktop>
          <AppList
            data={apiData?.data?.filter((item) =>
              item.subject.toLowerCase().includes(filterText.toLowerCase()),
            )}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderItem={(mail) => (
              <MailListItem
                mail={mail}
                key={mail.id}
                onChangeCheckedMails={onChangeCheckedMails}
                checkedMails={checkedMails}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
                onRemoveItem={onRemoveItem}
                onUpdateItem={onUpdateItem}
              />
            )}
          />
        </StyledMailListDesktop>
        <StyledMailListMobile>
          <AppList
            data={apiData?.data?.filter((item) =>
              item.subject.toLowerCase().includes(filterText.toLowerCase()),
            )}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderItem={(mail) => (
              <MailListItemMobile
                mail={mail}
                key={mail.id}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
                checkedMails={checkedMails}
                onChangeCheckedMails={onChangeCheckedMails}
              />
            )}
          />
        </StyledMailListMobile>
      </AppsContent>
      {apiData?.data?.length > 0 ? (
        <StyledAppsMailFooter>
          <AppsFooter>
            <AppsPagination
              count={apiData?.count}
              page={page}
              onChange={onPageChange}
            />
          </AppsFooter>
        </StyledAppsMailFooter>
      ) : null}
    </>
  );
};

export default MailsList;
