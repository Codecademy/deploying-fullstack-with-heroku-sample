import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiMail, FiPhone } from 'react-icons/fi';
import {
  StyledAvatarIcon,
  StyledContactAddress,
  StyledContactAddressItem,
} from './index.styled';

const Address = () => {
  return (
    <StyledContactAddress>
      <StyledContactAddressItem>
        <StyledAvatarIcon>
          <HiOutlineLocationMarker />
        </StyledAvatarIcon>
        <p>
          795 Folsom Ave, Suite 600 <br /> San Francisco, CA 94107
        </p>
      </StyledContactAddressItem>
      <StyledContactAddressItem>
        <StyledAvatarIcon>
          <FiPhone />
        </StyledAvatarIcon>
        <p>(120) 456-789-123</p>
      </StyledContactAddressItem>
      <StyledContactAddressItem>
        <StyledAvatarIcon>
          <FiMail />
        </StyledAvatarIcon>
        <p>support@yourmail.com</p>
      </StyledContactAddressItem>
    </StyledContactAddress>
  );
};

export default Address;
