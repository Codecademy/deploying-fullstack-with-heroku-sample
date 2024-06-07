import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppList from '@crema/components/AppList';
import IntlMessages from '@crema/helpers/IntlMessages';
import { AiOutlineEdit, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiErrorCircle, BiPhone } from 'react-icons/bi';
import { FiThumbsUp } from 'react-icons/fi';
import { MdPublic } from 'react-icons/md';
import {
  StyledWallAboutBtn,
  StyledWallAboutBtnView,
  StyledWallAboutCard,
  StyledWallAboutItem,
  StyledWallAboutItemIcon,
} from './index.styled';

const getIconByName = (iconName) => {
  switch (iconName) {
    case 'person':
      return <AiOutlineUser />;
    case 'phone':
      return <BiPhone />;
    case 'email':
      return <AiOutlineMail />;
    case 'error':
      return <BiErrorCircle />;
    case 'thumb':
      return <FiThumbsUp />;
    case 'public':
      return <MdPublic />;
  }
};

const AboutItem = ({ item }) => {
  const getLinkAddress = () => {
    switch (item.linkType) {
      case 'link': {
        return <a href={item.text}>{item.text}</a>;
      }
      case 'phone': {
        return <a href={`tel:${item.text}`}>{item.text}</a>;
      }
      case 'email': {
        return <a href={`mailto:${item.text}`}>{item.text}</a>;
      }
      default:
        return <p>{item.text}</p>;
    }
  };

  return (
    <StyledWallAboutItem>
      <StyledWallAboutItemIcon>
        {getIconByName(item.icon)}
      </StyledWallAboutItemIcon>
      {getLinkAddress()}
      <StyledWallAboutBtnView>
        <StyledWallAboutBtn
          title={<IntlMessages id='common.edit' />}
          icon={<AiOutlineEdit />}
        />
      </StyledWallAboutBtnView>
    </StyledWallAboutItem>
  );
};

const About = ({ about }) => {
  const { messages } = useIntl();
  return (
    <StyledWallAboutCard
      title={messages['wall.about']}
      extra={<a href='#/'>{messages['common.editPageInfo']}</a>}
    >
      <AppList
        data={about}
        renderItem={(data, index) => <AboutItem key={index} item={data} />}
      />
    </StyledWallAboutCard>
  );
};

export default About;

About.propTypes = {
  about: PropTypes.array.isRequired,
};
AboutItem.propTypes = {
  item: PropTypes.object.isRequired,
};
