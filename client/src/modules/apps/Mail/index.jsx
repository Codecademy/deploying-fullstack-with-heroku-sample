import MailsList from "./MailsList";
import MailDetail from "./MailDetail";
import PropTypes from "prop-types";
import AppsContainer from "@crema/components/AppsContainer";
import MailSidebar from "./MailSideBar";
import { useIntl } from "react-intl";
import AppPageMeta from "@crema/components/AppPageMeta";
import { useParams } from "react-router-dom";
import MailContextProvider from "../context/MailContextProvider";

const Mail = () => {
  const { id } = useParams();

  const onGetMainComponent = () => {
    if (id) {
      return <MailDetail />;
    } else {
      return <MailsList />;
    }
  };

  const { messages } = useIntl();
  return (
    <MailContextProvider>
      <AppsContainer
        title={messages["mailApp.mail"]}
        sidebarContent={<MailSidebar />}
      >
        <AppPageMeta title="Mail App" />
        {onGetMainComponent()}
      </AppsContainer>
    </MailContextProvider>
  );
};

export default Mail;

Mail.defaultProps = {
  match: null,
};

Mail.propTypes = {
  match: PropTypes.object,
};
