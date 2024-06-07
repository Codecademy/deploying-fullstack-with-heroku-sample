import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import AppIconButton from '@crema/components/AppIconButton';
import { useIntl } from 'react-intl';
import { StyledContactViewSelect } from '../index.styled';

const ViewSelectButtons = ({ pageView, onChangePageView }) => {
  const { messages } = useIntl();
  return (
    <StyledContactViewSelect>
      <AppIconButton
        title={messages['sidebar.ecommerce.gridView']}
        className={clsx({
          active: pageView === 'grid',
        })}
        icon={<AppstoreOutlined />}
        onClick={() => onChangePageView('grid')}
      />

      <AppIconButton
        icon={<BarsOutlined />}
        title={messages['sidebar.ecommerce.listView']}
        className={clsx({
          active: pageView === 'list',
        })}
        onClick={() => onChangePageView('list')}
      />
    </StyledContactViewSelect>
  );
};

export default ViewSelectButtons;

ViewSelectButtons.propTypes = {
  pageView: PropTypes.string,
  onChangePageView: PropTypes.func,
};
