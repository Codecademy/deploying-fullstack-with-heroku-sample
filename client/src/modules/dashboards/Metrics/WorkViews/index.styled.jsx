import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledWorkViewCard = styled(AppCard)`
  & .ant-card-body {
    display: flex;
    flex-direction: column;
  }

  & h3 {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-bottom: 0;
  }
`;

export const StyledWorkViewsGraph = styled.div`
  margin-top: auto;
`;
