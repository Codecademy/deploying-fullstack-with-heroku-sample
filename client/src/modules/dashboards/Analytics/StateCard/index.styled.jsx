import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledAnaStateCard = styled(AppCard)`
  position: relative;
  overflow: hidden;
`;

export const StyledAnaStateContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & p {
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 0;
  }

  & .btn-icon {
    height: 50px;
    width: 50px;
    min-width: 50px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    box-shadow: none;
    padding: 0;
    margin-right: 15px;
    border: 0 none;

    [dir='rtl'] & {
      margin-left: 15px;
      margin-right: 0;
    }

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.palette.dividerColor};
    }

    & img {
      max-width: 100%;
    }
  }
`;

export const StyledAnaStateRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const StyledAnaStateItem = styled.div`
  position: relative;
  flex: 1;
`;

export const StyledAnaStateHeader = styled.div`
  position: relative;
  margin-bottom: 2px;

  & h3 {
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 18px;
    margin-bottom: 0;
  }

  & span {
    margin-left: 12px;
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 12px;
    }
  }
`;

export const StyledAnaStateGraphs = styled.div`
  margin: 0 -20px -20px;
`;
