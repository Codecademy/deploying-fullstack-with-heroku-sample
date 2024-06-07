import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import AppsPagination from '@crema/components/AppsPagination';
import { StyledCheckbox, StyledFlex } from './index.style';
import { Input } from 'antd';

const InvContentHeader = (props) => {
  const {
    page,
    invoiceList,
    checkedInvs,
    setCheckedInvs,
    filterText,
    onPageChange,
    onSetFilterText,
  } = props;

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const InvIds = invoiceList?.map((Inv) => Inv.id);
      setCheckedInvs(InvIds);
    } else {
      setCheckedInvs([]);
    }
  };

  const { messages } = useIntl();

  return (
    <>
      <StyledFlex>
        <StyledCheckbox
          color='primary'
          checked={
            invoiceList?.length > 0 &&
            checkedInvs?.length === invoiceList?.length
          }
          onChange={onHandleMasterCheckbox}
        />
        <div style={{ marginRight: 12 }}>
          <Input.Search
            iconPosition='right'
            value={filterText}
            onChange={(event) => onSetFilterText(event.target.value)}
            placeholder={messages['common.searchHere']}
          />
        </div>
      </StyledFlex>

      {invoiceList?.length > 0 ? (
        <AppsPagination
          count={invoiceList?.length}
          page={page}
          onChange={onPageChange}
        />
      ) : null}
    </>
  );
};

export default InvContentHeader;

InvContentHeader.defaultProps = {
  checkedInvs: [],
  filterText: '',
  page: 0,
};

InvContentHeader.propTypes = {
  checkedInvs: PropTypes.array,
  invoiceList: PropTypes.array,
  setCheckedInvs: PropTypes.func,
  onUpdateInvs: PropTypes.func,
  viewMode: PropTypes.string,
  onViewModeSelect: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  page: PropTypes.number,
  onPageChange: PropTypes.func,
};
