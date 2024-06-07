import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const ItemMenu = (props) => {
  const {
    onSelectContactsForDelete,
    contact,
    onChangeStarred,
    onOpenEditContact,
  } = props;

  const onDeleteContact = () => {
    onSelectContactsForDelete([contact.id]);
  };

  const onChangeStarredStatus = () => {
    onChangeStarred(!contact.isStarred, contact);
  };

  const onClickEditOption = () => {
    onOpenEditContact(contact);
  };

  const items = [
    {
      key: 1,
      label: (
        <span onClick={onChangeStarredStatus}>
          {contact.isStarred ? (
            <IntlMessages id='common.unstarred' />
          ) : (
            <IntlMessages id='common.starred' />
          )}
        </span>
      ),
    },
    {
      key: 2,
      label: (
        <span key={312} onClick={onClickEditOption}>
          <IntlMessages id='common.edit' />
        </span>
      ),
    },
    {
      key: 3,
      label: (
        <span key={313} onClick={onDeleteContact}>
          <IntlMessages id='common.delete' />
        </span>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Button type='circle'>
        <MoreOutlined />
      </Button>
    </Dropdown>
  );
};

export default ItemMenu;

ItemMenu.propTypes = {
  onSelectContactsForDelete: PropTypes.func,
  contact: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
