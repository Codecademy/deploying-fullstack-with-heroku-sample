import styled from 'styled-components';

export const StyledSwitchWrapper = styled.div`
  width: fit-content;
  margin: auto;
  border-radius: 6px;
  padding: 4px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  display: flex;
  align-items: center;

  .active {
    box-shadow:
      0px 1px 3px rgba(16, 24, 40, 0.1),
      0px 1px 2px rgba(16, 24, 40, 0.06);
  }
`;

export const StyledSwitchBtn = styled.div`
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
`;

export const StyledSwitchBtnSuffix = styled.div`
  border-radius: 20px;
  background-color: #f2f4f7;
  margin-left: 12px;
  padding: 4px 8px;
`;

export const StyledLovePeopleWrapper = styled.div`
  margin: 60px auto 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledLovePeopleImgWrapper = styled.div`
  margin: 10px auto;
`;

export const StyledHeading = styled.p`
  margin-top: 30px;
  font-weight: 600;
  font-size: 48px;
  max-width: 600px;
  line-height: 1;
`;
