import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { StyledMailLabelItem } from "./index.styled";
import { StyledMailDots } from "../MailsList/index.styled";

const LabelItem = ({ label }) => {
  return (
    <StyledMailLabelItem key={label.id}>
      <NavLink to={`/apps/mail/label/${label.alias}`}>
        <StyledMailDots
          className="mail-dots"
          style={{ backgroundColor: label.color }}
        />
        {label.name}
      </NavLink>
    </StyledMailLabelItem>
  );
};

export default LabelItem;

LabelItem.propTypes = {
  label: PropTypes.object.isRequired,
};
