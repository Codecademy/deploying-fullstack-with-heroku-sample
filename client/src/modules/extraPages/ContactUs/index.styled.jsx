import styled from 'styled-components';

export const StyledContactSimpleMap = styled.div`
  margin-bottom: 20px;
  max-height: 40%;
`;

export const StyledContactEmbedResponsive = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  max-height: 300px;

  &:before {
    display: block;
    content: '';
  }

  & .contact-embed-responsive-item,
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

  &.contact-embed-responsive-21by9:before {
    padding-top: 26%;

    @media screen and (max-width: 499px) {
      padding-top: 100%;
    }
  }
`;
