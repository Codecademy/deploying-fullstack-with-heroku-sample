import { ArrowUpOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const StyledAppointmentContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledAppointmentContentItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  & h3 {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  & p {
    margin-bottom: 8px;
  }

  & h5 {
    font-size: ${({ theme }) => theme.font.size.sm};
    margin-bottom: 12px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-align: right;
    color: ${({ theme }) => theme.palette.primary.contrastText};

    [dir='rtl'] & {
      text-align: left;
    }
  }
`;

export const StyledAppointmentThumb = styled.span`
  margin-bottom: 8px;
`;

export const StyledAppointmentContentRight = styled(
  StyledAppointmentContentItem,
)`
  align-items: flex-end;
`;

export const StyledAppointmentArrowIcon = styled(ArrowUpOutlined)`
  font-size: 18px;
  margin-right: 2px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 2px;
  }
`;
