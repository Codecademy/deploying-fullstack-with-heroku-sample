import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { Button } from 'antd';

import { CloseOutlined } from '@ant-design/icons';
import {
  StyledCategoryListHalf,
  StyledCategoryScrollbar,
} from './index.styled';

const Categories = (props) => {
  const { messages } = useIntl();
  const data = props.data;

  const [categoryList, handleList] = useState(data);

  const handleChange = (e, category) => {
    category.isChecked = e.target.checked;
    const list = categoryList.map((item) =>
      item.id === category.id ? category : item,
    );
    handleList(list);
  };

  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.categories']}
      extra={
        <Button className='close-btn'>
          <CloseOutlined />
        </Button>
      }
    >
      <StyledCategoryScrollbar>
        <StyledCategoryListHalf
          dataSource={categoryList}
          renderItem={(item, index) => (
            <CategoryItem
              id={index}
              key={index}
              item={item}
              handleChange={handleChange}
            />
          )}
        />
      </StyledCategoryScrollbar>
    </AppCard>
  );
};

export default Categories;

Categories.defaultProps = {
  categoryList: [],
};

Categories.propTypes = {
  categoryList: PropTypes.array,
  data: PropTypes.array,
};
