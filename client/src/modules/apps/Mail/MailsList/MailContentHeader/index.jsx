import PropTypes from "prop-types";
import CheckedMailActions from "./CheckedMailActions";
import MoreOptions from "./MoreOptions";
import { useIntl } from "react-intl";
import {
  StyledMailContentHeader,
  StyledMailContentHeaderCheckbox,
  StyledMailContentHeaderPagination,
  StyledMailSearch,
} from "../index.styled";
import {
  useMailActionsContext,
  useMailContext,
} from "../../../context/MailContextProvider";

const MailContentHeader = (props) => {
  const { path, checkedMails, setCheckedMails, filterText, onSetFilterText } =
    props;

  const { page, mailList } = useMailContext();
  const { onPageChange } = useMailActionsContext();

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const mailIds = mailList?.data?.map((mail) => mail.id);
      setCheckedMails(mailIds);
    } else {
      setCheckedMails([]);
    }
  };

  const { messages } = useIntl();

  return (
    <>
      <StyledMailContentHeader>
        <StyledMailContentHeaderCheckbox
          color="primary"
          indeterminate={
            checkedMails?.length > 0 &&
            checkedMails?.length < mailList?.data?.length
          }
          checked={
            mailList?.data?.length > 0 &&
            checkedMails?.length === mailList?.data?.length
          }
          onChange={onHandleMasterCheckbox}
        />

        <StyledMailSearch
          placeholder={messages["common.searchHere"]}
          value={filterText}
          onChange={(event) => onSetFilterText(event.target.value)}
        />

        {checkedMails.length > 0 ? (
          <CheckedMailActions
            checkedMails={checkedMails}
            setCheckedMails={setCheckedMails}
          />
        ) : null}

        <MoreOptions
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          path={path}
          mailList={mailList?.data || []}
        />
      </StyledMailContentHeader>
      {mailList?.data?.length > 0 ? (
        <StyledMailContentHeaderPagination
          count={mailList?.count}
          page={page}
          onChange={onPageChange}
        />
      ) : null}
    </>
  );
};

export default MailContentHeader;

MailContentHeader.defaultProps = {
  checkedMails: [],
  page: 0,
};

MailContentHeader.propTypes = {
  checkedMails: PropTypes.array,
  setCheckedMails: PropTypes.func,
  page: PropTypes.number,
  onChange: PropTypes.func,
  onSetFilterText: PropTypes.func,
  setData: PropTypes.func,
  path: PropTypes.any,
  filterText: PropTypes.string,
  totalMails: PropTypes.any,
  mailList: PropTypes.any,
};
