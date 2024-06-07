import React from 'react';
import { Col } from 'antd';
import 'react-notifications-component/dist/theme.css';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowSimpleContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';
import AnimationEntrance from './AnimationEntrance';
import AnimationEntranceSource from './AnimationEntrance?raw';
import AnimationExit from './AnimationExit';
import AnimationExitSource from './AnimationExit?raw';
import Insert from './Insert';
import InsertSource from './Insert?raw';
import Container from './Container';
import ContainerSource from './Container?raw';
import CustomContent from './CustomContent';
import CustomContentSource from './CustomContent?raw';
import Type from './Type';
import TypeSource from './Type?raw';
import { ReactNotifications } from 'react-notifications-component';

const ReactNotificationEx = () => {
  return (
    <div className='app-container'>
      <AppComponentHeader
        title='React Notifications'
        description='Delightful and highly customisable React Component to notify your users.'
        refUrl='https://teodosii.github.io/react-notifications-component//'
      />

      <ReactNotifications />
      <AppRowSimpleContainer>
        <Col span={24} key='notification-a'>
          <AppComponentCard
            title='Animation Entrance'
            description='Entrance animation can be customised by specifying CSS classes'
            component={AnimationEntrance}
            source={AnimationEntranceSource}
          />
        </Col>
        <Col span={24} key='notification-b'>
          <AppComponentCard
            title='Animation Exit'
            description='Exit animation can be customised by specifying CSS classes'
            component={AnimationExit}
            source={AnimationExitSource}
          />
        </Col>
        <Col span={24} key='notification-c'>
          <AppComponentCard
            title='Container'
            description='Container can be set from predefined values top-left, top-right, top-center, bottom-left, bottom-right, bottom-center'
            component={Container}
            source={ContainerSource}
          />
        </Col>
        <Col span={24} key='notification-d'>
          <AppComponentCard
            title='Custom Content'
            description="With react-notifications-component notification's content can be customised to suit your needs."
            component={CustomContent}
            source={CustomContentSource}
          />
        </Col>
        <Col span={24} key='notification-e'>
          <AppComponentCard
            title='Insert'
            description='Insertion in react-notifications can be done either at the top or at the bottom of the container'
            component={Insert}
            source={InsertSource}
          />
        </Col>
        <Col span={24} key='notification-f'>
          <AppComponentCard
            title='Type'
            description='Type can be set from predefined values success, default, warning, info, danger or custom to suit your needs'
            component={Type}
            source={TypeSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </div>
  );
};

export default ReactNotificationEx;
