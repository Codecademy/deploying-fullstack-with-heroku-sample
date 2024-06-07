import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import { RightOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import {
  StyledSubButton,
  StyledSubCard,
  StyledSubFormFieldRow,
  StyledSubInput,
  StyledSubText,
} from './index.styled';

const Subscribe = () => {
  const { messages } = useIntl();

  return (
    <StyledSubCard heightFull title={messages['dashboard.subscribe']}>
      <StyledSubText>
        <IntlMessages id='dashboard.subscribeContent' />
      </StyledSubText>
      <Form>
        <StyledSubFormFieldRow>
          <div className='form-field'>
            <StyledSubInput
              placeholder={messages['common.email']}
              name='email'
            />
          </div>
          <div className='form-btn-field'>
            <StyledSubButton type='primary'>
              <RightOutlined />
            </StyledSubButton>
          </div>
        </StyledSubFormFieldRow>
      </Form>
    </StyledSubCard>
  );
};

export default Subscribe;
