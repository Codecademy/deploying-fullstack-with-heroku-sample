import PropTypes from "prop-types";
import ComponentCardWithoutAnim from "./ComponentCardWithoutAnim";

const AppComponentCard = ({
  title,
  description,
  className,
  maxHeight,
  component,
  source,
}) => {
  return (
    <ComponentCardWithoutAnim
      title={title}
      description={description}
      className={className}
      maxHeight={maxHeight}
      component={component}
      source={source}
      key={"card"}
    />
  );
};

export default AppComponentCard;

AppComponentCard.defaultProps = {
  description: "",
  maxHeight: 500,
};

AppComponentCard.propTypes = {
  component: PropTypes.any.isRequired,
  source: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  maxHeight: PropTypes.number,
  className: PropTypes.string,
  size: PropTypes.number,
};
