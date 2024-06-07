import React from 'react';
import PropTypes from 'prop-types';
import { StyledFlexTag, StyledTag, StyledTagWrapper } from '../index.styled';

const Tag = ({ tag }) => {
  return (
    <StyledFlexTag>
      {tag.map((tag, index) => (
        <StyledTagWrapper key={index}>
          <StyledTag>{tag.name}</StyledTag>
        </StyledTagWrapper>
      ))}
    </StyledFlexTag>
  );
};

export default Tag;

Tag.propTypes = {
  tag: PropTypes.array,
};
