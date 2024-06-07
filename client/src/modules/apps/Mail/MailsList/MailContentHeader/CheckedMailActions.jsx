import IntlMessages from "@crema/helpers/IntlMessages";
import PropTypes from "prop-types";
import { Button, Dropdown } from "antd";
import { BiArchiveIn } from "react-icons/bi";
import { HiOutlineFolderRemove } from "react-icons/hi";
import { MdLabelOutline } from "react-icons/md";
import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";
import AppIconButton from "@crema/components/AppIconButton";
import { StyledMailCheckedAction } from "../index.styled";
import { putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import {
  useMailActionsContext,
  useMailContext,
} from "../../../context/MailContextProvider";

const CheckedMailActions = (props) => {
  const { checkedMails, setCheckedMails } = props;
  const infoViewActionsContext = useInfoViewActionsContext();
  const { setMailData } = useMailActionsContext();
  const { labelList, folderList } = useMailContext();

  const onChangeMailFolder = (key) => {
    putDataApi("/api/mailApp/update/folder", infoViewActionsContext, {
      mailIds: checkedMails,
      type: key,
    })
      .then((data) => {
        setMailData({ data, count: data.length });
        infoViewActionsContext.showMessage("Mail moved to folder successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
    setCheckedMails([]);
  };

  const onSelectLabel = (key) => {
    const labelType = labelList.find(
      (label) => label.id.toString() === key.toString(),
    );
    putDataApi("/api/mailApp/update/label", infoViewActionsContext, {
      mailIds: checkedMails,
      type: labelType,
    })
      .then((data) => {
        setMailData({ data, count: data.length });
        infoViewActionsContext.showMessage("Mail moved to folder successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
    setCheckedMails([]);
  };

  const menuLabel = labelList?.map((label, index) => {
    return {
      key: index,
      label: <span onClick={() => onSelectLabel(label.id)}>{label.name}</span>,
    };
  });

  const menuMoveTo = folderList?.map((folder, index) => {
    return {
      key: index,
      label: (
        <span onClick={() => onChangeMailFolder(folder.id)}>{folder.name}</span>
      ),
    };
  });

  return (
    <StyledMailCheckedAction>
      <AppIconButton
        title={<IntlMessages id="common.archive" />}
        onClick={() => onChangeMailFolder(127)}
        icon={<BiArchiveIn />}
      />

      <AppIconButton
        title={<IntlMessages id="common.reportSpam" />}
        onClick={() => onChangeMailFolder(125)}
        icon={<AiOutlineInfoCircle />}
      />

      <AppIconButton
        title={<IntlMessages id="common.trash" />}
        onClick={() => onChangeMailFolder(126)}
        icon={<AiOutlineDelete />}
      />

      <Dropdown menu={{ items: menuLabel }} trigger={["click"]}>
        <Button type="circle">
          <MdLabelOutline />
        </Button>
      </Dropdown>

      <Dropdown menu={{ items: menuMoveTo }} trigger={["click"]}>
        <Button type="circle">
          <HiOutlineFolderRemove />
        </Button>
      </Dropdown>
    </StyledMailCheckedAction>
  );
};

export default CheckedMailActions;

CheckedMailActions.defaultProps = {
  checkedMails: [],
};

CheckedMailActions.propTypes = {
  checkedMails: PropTypes.array.isRequired,
  setCheckedMails: PropTypes.func,
  setData: PropTypes.func,
};
