import AppCard from '@crema/components/AppCard';
import AppIconButton from '@crema/components/AppIconButton';
import styled from 'styled-components';

export const StyledWallAboutItem = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:first-child {
    align-items: flex-start;
  }

  &:hover .wall-about-btn {
    opacity: 1;
    visibility: visible;
  }

  &:hover a,
  &:focus a {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  & a {
    text-decoration: none;
    word-break: break-all;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  & .material-icons {
    display: block;
  }

  & p {
    margin-bottom: 0;
  }
`;

export const StyledWallAboutItemIcon = styled.span`
  margin-right: 14px;
  font-size: ${({ theme }) => theme.font.size.lg};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }

  & svg {
    display: block;
  }
`;

export const StyledWallAboutBtnView = styled.span`
  margin-left: auto;
  margin-right: -8px;
  margin-top: -8px;

  [dir='rtl'] & {
    margin-left: -8px;
    margin-right: auto;
  }
`;

export const StyledWallAboutBtn = styled(AppIconButton)`
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 8px;
  opacity: 0;
  visibility: hidden;

  & .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

export const StyledWallAboutCard = styled(AppCard)`
  margin-bottom: 32px;
`;
