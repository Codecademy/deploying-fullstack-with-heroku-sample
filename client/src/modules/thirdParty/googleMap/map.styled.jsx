import styled from 'styled-components';

export const StyledCrEmbedResponsive = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;

  &:before {
    display: block;
    content: '';
  }

  & .cr-embed-responsive-item,
  & iframe,
  & embed,
  & object,
  & video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  &.cr-embed-responsive-21by9:before {
    padding-top: 42.85714286%;

    @media screen and (max-width: 499px) {
      padding-top: 100%;
    }
  }

  &.cr-embed-responsive-16by9:before {
    padding-top: 56.25%;

    @media screen and (max-width: 499px) {
      padding-top: 100%;
    }
  }

  &.cr-embed-responsive-4by3:before {
    padding-top: 75%;
  }

  &.cr-embed-responsive-1by1:before {
    padding-top: 100%;
  }
`;

export const StyledCrEmbedResponsive21by9 = styled(StyledCrEmbedResponsive)`
  &::before {
    padding-top: 42.85714286%;

    @media screen and (max-width: 499px) {
      padding-top: 100%;
    }
  }
`;

export const StyledCrMapPopup = styled.div`
  display: flex;
`;

export const StyledCrMapPopupInfo = styled.div`
  margin-left: 16px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 16px;
  }
`;
