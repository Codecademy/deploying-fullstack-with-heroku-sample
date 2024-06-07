import styled from 'styled-components';
import AppCard from '@crema/components/AppCard';

export const StyledInfoWidgetCard = styled(AppCard)`
  & .ant-card-body {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const StyledInfoWidgetInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledInfoWidgetThumb = styled.div`
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const StyledInfoWidgetContent = styled.div`
  text-align: center;
  overflow: hidden;
  width: 100%;

  & h3 {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 12px;
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 0;
  }
`;
