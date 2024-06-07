import styled from 'styled-components';

export const StyledEvents = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & .ant-badge-status {
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const StyledNotesMonth = styled.div`
  font-size: 28px;
  text-align: center;

  section {
    font-size: 28px;
  }
`;
