import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import { useIntl } from 'react-intl';
import { StyledTodoChStaffAvatar } from '../index.styled';
import { useTodoContext } from '../../../context/TodoContextProvider';

const { Option } = Select;

const ChangeStaff = ({ handleStaffChange, selectedStaff }) => {
  const { staffList } = useTodoContext();

  const { messages } = useIntl();
  return (
    <Form.Item className='form-field'>
      <Select
        defaultValue={selectedStaff?.id}
        placeholder={messages['common.staff']}
        onSelect={handleStaffChange}
        style={{ minWidth: 150 }}
      >
        {staffList.map((staff) => {
          return (
            <Option value={staff.id} key={staff.id}>
              <div className='ant-row ant-row-middle'>
                {staff.image ? (
                  <StyledTodoChStaffAvatar src={staff.image} />
                ) : (
                  <StyledTodoChStaffAvatar>
                    {staff.name.toUpperCase()}
                  </StyledTodoChStaffAvatar>
                )}
                <span>{staff.name}</span>
              </div>
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

export default ChangeStaff;

ChangeStaff.defaultProps = {
  inputLabel: null,
  labelWidth: 0,
};

ChangeStaff.propTypes = {
  handleStaffChange: PropTypes.func,
  selectedStaff: PropTypes.object,
};
