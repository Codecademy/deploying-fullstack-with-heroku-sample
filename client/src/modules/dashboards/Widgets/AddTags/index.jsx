import React, { useState } from 'react';
import AddNewTag from './AddNewTag';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { CloseOutlined } from '@ant-design/icons';
import { blue, cyan, green, orange, red } from '@ant-design/colors';
import {
  StyledAddTagsContent,
  StyledAddTagsRow,
  StyledTagBadge,
  StyledTagBadgeButton,
} from './index.styled';

const colorList = [
  { id: 9001, color: blue[6] },
  { id: 9002, color: red[6] },
  { id: 9003, color: green[6] },
  { id: 9004, color: orange[6] },
  { id: 9005, color: cyan[7] },
  { id: 9006, color: blue[6] },
];

const AddTags = (props) => {
  const { data } = props;

  const [tags, setTags] = useState(data);

  const handleDelete = (tagToDelete) => () => {
    setTags((tags) => tags.filter((tag) => tag.id !== tagToDelete.id));
    console.log('Deleted');
  };

  const onAddNewTag = (newTag) => {
    let tag = {
      label: newTag,
      key: Math.floor(Math.random() * 10000),
      color: colorList[Math.floor(Math.random() * colorList.length)].color,
    };
    setTags((tags) => tags.concat(tag));
  };

  const { messages } = useIntl();

  return (
    <AppCard heightFull title={messages['dashboard.addTags']}>
      <StyledAddTagsContent>
        <StyledAddTagsRow>
          {tags.map((item) => {
            return (
              <StyledTagBadge
                key={item.id}
                id={item.id}
                style={{ backgroundColor: item.color }}
              >
                <span>{item.label}</span>
                <StyledTagBadgeButton onClick={handleDelete(item)}>
                  <CloseOutlined />
                </StyledTagBadgeButton>
              </StyledTagBadge>
            );
          })}
        </StyledAddTagsRow>

        <AddNewTag onAddNewTag={onAddNewTag} />
      </StyledAddTagsContent>
    </AppCard>
  );
};

export default AddTags;

AddTags.defaultProps = {
  data: [],
};

AddTags.propTypes = {
  data: PropTypes.array,
};
