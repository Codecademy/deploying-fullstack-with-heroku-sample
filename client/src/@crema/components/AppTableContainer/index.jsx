import clsx from "clsx";
import PropTypes from "prop-types";
import { StyledQueueAnim } from "./index.styled";

const AppTableContainer = (props) => {
  const { columns, data, pagination, hoverColor, className, ...rest } = props;

  return (
    <StyledQueueAnim
      className={clsx({ hoverColor: hoverColor }, className)}
      columns={columns}
      dataSource={data}
      rowKey="id"
      pagination={pagination}
      {...rest}
    />
  );
};

export default AppTableContainer;

AppTableContainer.propTypes = {
  columns: PropTypes.any,
  data: PropTypes.array,
  className: PropTypes.string,
  pagination: PropTypes.bool,
  hoverColor: PropTypes.bool,
};

AppTableContainer.defaultProps = {
  pagination: false,
};
