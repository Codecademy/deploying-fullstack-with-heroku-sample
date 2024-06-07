import PropTypes from "prop-types";
import { Col, Row } from "antd";
import PeopleCard from "./PeopleCard";

const LovePeople = ({ data }) => {
  return (
    <Row align="center" gutter={30}>
      {data.map((data) => (
        <Col xs={24} md={12} lg={8} key={data.id}>
          <PeopleCard data={data} />
        </Col>
      ))}
    </Row>
  );
};

export default LovePeople;

LovePeople.propTypes = {
  data: PropTypes.array,
};
