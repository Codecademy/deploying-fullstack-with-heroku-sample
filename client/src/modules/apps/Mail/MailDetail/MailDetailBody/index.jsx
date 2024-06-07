import PropTypes from "prop-types";
import {
  StyledMailDetailBody,
  StyledMailDetailBodyContent,
} from "../index.styled";
import { putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import MessageItem from "./MessageItem";

const MailDetailBody = ({ selectedMail, onUpdateSelectedMail }) => {
  const infoViewActionsContext = useInfoViewActionsContext();

  const onSubmitMail = (message, index) => {
    let messages = selectedMail.messages;
    messages.splice(index + 1, 0, message);
    selectedMail.messages = messages;
    putDataApi("/api/mailApp/mail/", infoViewActionsContext, {
      mail: selectedMail,
    })
      .then((data) => {
        onUpdateSelectedMail(data);
        infoViewActionsContext.showMessage("Mail Sent Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeStarred = (message, isStarred) => {
    message.isStarred = isStarred;
    selectedMail.messages = selectedMail.messages.map((data) =>
      data.messageId === message.messageId ? message : data,
    );
    putDataApi("/api/mailApp/mail/", infoViewActionsContext, {
      mail: selectedMail,
    })
      .then((data) => {
        onUpdateSelectedMail(data);
        infoViewActionsContext.showMessage("Mail Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <StyledMailDetailBody>
      {selectedMail ? (
        <StyledMailDetailBodyContent>
          {selectedMail.messages.map((message, index) => (
            <MessageItem
              key={index}
              index={index}
              mailLength={selectedMail.messages.length}
              message={message}
              onSubmitMail={onSubmitMail}
              onChangeStarred={onChangeStarred}
            />
          ))}
        </StyledMailDetailBodyContent>
      ) : null}
    </StyledMailDetailBody>
  );
};

export default MailDetailBody;

MailDetailBody.propTypes = {
  selectedMail: PropTypes.object.isRequired,
  onUpdateSelectedMail: PropTypes.func,
};
