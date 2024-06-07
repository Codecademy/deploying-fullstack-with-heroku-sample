import styled from 'styled-components';
import AppCard from '@crema/components/AppCard';

export const StyledAnaInfoWidgetCard = styled(AppCard)`
  & .ant-card-body {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const StyledAnaInfoWidgetInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledAnaInfoWidgetImg = styled.div`
  margin-bottom: 16px;
  width: 60px;
  height: 60px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: 80px;
    height: 80px;
  }
`;

export const StyledAnaInfoWidgetContent = styled.div`
  text-align: center;
  overflow: hidden;
  width: 100%;

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 18px;
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 0;
  }

  & p {
    margin-bottom: 0;
    text-align: center;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
