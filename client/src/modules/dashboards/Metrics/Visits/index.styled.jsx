import AppCard from '@crema/components/AppCard';
import styled from 'styled-components';

export const StyledVisitsCard = styled(AppCard)`
  position: relative;

  & .ant-card-actions {
    padding: 16px 20px;
    border-top: 0 none;

    & li {
      margin: 0;
    }

    & > li > span:hover {
      color: ${({ theme }) => theme.palette.text.primary};
      cursor: inherit;
    }
  }
`;

export const StyledVisitsFooter = styled.div`
  width: 100%;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.text.primary};

  & p {
    margin-bottom: 0;

    & span {
      margin-left: 8px;
      color: ${({ theme }) => theme.palette.primary.main};

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 8px;
      }
    }
  }
`;

export const StyledVisitsGraphPayload = styled.span`
  padding: 2px 16px;
  color: white;
`;
