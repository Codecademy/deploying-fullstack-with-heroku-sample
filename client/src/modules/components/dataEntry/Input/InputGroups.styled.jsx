import styled from 'styled-components';

export const StyledSiteInputGroupWrapper = styled.div`
  & .site-input-split {
    background-color: #fff;
  }

  & .site-input-right {
    border-left-width: 0;
  }

  & .site-input-right:hover,
  & .site-input-right:focus {
    border-left-width: 1px;
  }

  & .ant-input-rtl.site-input-right {
    border-right-width: 0;
  }

  & .ant-input-rtl.site-input-right:hover,
  & .ant-input-rtl.site-input-right:focus {
    border-right-width: 1px;
  }
`;
