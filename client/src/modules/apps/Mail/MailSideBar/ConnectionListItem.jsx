import PropTypes from "prop-types";
import {
  StyledMailConnectionAvatar,
  StyledMailConnectionContent,
  StyledMailConnectionListItem,
  StyledMailConnectionTitle,
} from "./index.styled";

const ConnectionListItem = (props) => {
  const { connection } = props;

  return (
    <>
      <StyledMailConnectionListItem key={connection.id}>
        <StyledMailConnectionAvatar alt="Remy Sharp" src={connection.image} />
        <StyledMailConnectionContent>
          <StyledMailConnectionTitle>
            {connection.name}
          </StyledMailConnectionTitle>
          <p>{connection.status}</p>
        </StyledMailConnectionContent>
      </StyledMailConnectionListItem>
    </>
  );
};

export default ConnectionListItem;

ConnectionListItem.defaultProps = {
  connection: null,
};

ConnectionListItem.propTypes = {
  connection: PropTypes.object,
};
