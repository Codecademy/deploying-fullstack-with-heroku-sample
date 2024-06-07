import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledVisitorAnalysisCard = styled(AppCard)`
  position: relative;

  & .ant-card-actions {
    border-top: 0 none;
    padding: 0 20px 20px;
    background-color: transparent;

    & li {
      margin: 0;
      text-align: left;

      [dir='rtl'] & {
        text-align: right;
      }

      & p {
        margin-bottom: 0;
      }
    }
  }
`;

export const StyledVisitorAnalysisAction = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.secondary};

  & .dot {
    margin-right: 16px;
    background-color: ${({ theme }) => theme.palette.secondary.main};

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      width: 16px;
      height: 16px;
    }
  }
`;
export const StyledVisitorActionContent = styled.div`
  flex: 1;
`;

export const StyledVisitorProgressView = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .ant-progress-text {
    font-size: 30px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.palette.secondary.main} !important;
  }
`;
