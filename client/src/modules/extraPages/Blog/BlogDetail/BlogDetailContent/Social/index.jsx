import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import {
  StyledSocialFlex,
  StyledSocialWrapper,
  StyledSvgWrapper,
} from '../index.styled';

const socialData = [
  {
    id: 1,
    icon: <FaFacebook />,
  },
  {
    id: 2,
    icon: <AiOutlineInstagram />,
  },
  {
    id: 3,
    icon: <AiOutlineTwitter />,
  },
  {
    id: 4,
    icon: <AiOutlineGithub />,
  },
  {
    id: 5,
    icon: <FiGlobe />,
  },
];
const Social = () => {
  return (
    <StyledSocialFlex>
      {socialData?.map((social, index) => (
        <StyledSocialWrapper key={index}>
          <span
            style={{
              cursor: 'pointer',
            }}
          >
            <StyledSvgWrapper>{social.icon}</StyledSvgWrapper>
          </span>
        </StyledSocialWrapper>
      ))}
    </StyledSocialFlex>
  );
};

export default Social;
