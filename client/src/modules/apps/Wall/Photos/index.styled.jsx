import AppRowContainer from '@crema/components/AppRowContainer';
import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledPhotoCard = styled(AppCard)`
  margin-bottom: 32px;
`;

export const StyledPhotoRow = styled(AppRowContainer)`
  margin-left: -4px !important;
  margin-right: -4px !important;

  & > .ant-col {
    margin-bottom: 0;
    padding: 4px !important;
  }
`;

export const StyledPhotoAvatar = styled.img`
  display: block;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
`;

export const StyledPhotoLink = styled.span`
  margin: 16px -20px 0;
  padding: 12px 20px 0;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  display: block;
  cursor: pointer;
`;
