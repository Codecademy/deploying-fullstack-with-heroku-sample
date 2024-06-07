import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import { StyledHeading, StyledLearnBtn, StyledText } from "./index.styled";
import { AiOutlineArrowRight } from "react-icons/ai";

const PeopleCard = ({ data }) => {
  return (
    <Card style={{ minHeight: 320 }} align="left">
      <img src={data.src} alt="crema-logo" />
      <StyledHeading>{data.heading}</StyledHeading>
      <StyledText>{data.text}</StyledText>
      <StyledLearnBtn type="link">
        <span className="btn-text">Learn More</span>
        <AiOutlineArrowRight className="icon" size={16} />
      </StyledLearnBtn>
    </Card>
  );
};

export default PeopleCard;

PeopleCard.propTypes = {
  data: PropTypes.object,
};
