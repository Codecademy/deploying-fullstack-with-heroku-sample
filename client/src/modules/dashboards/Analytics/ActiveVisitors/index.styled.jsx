import { rgba } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledActiveVisitorGraphWrap = styled.div`
  padding-top: 20px;
  border-radius: ${({ theme }) => theme.cardRadius}
    ${({ theme }) => theme.cardRadius} 0 0;
  background-color: rgb(73, 189, 101);
`;

export const StyledActiveVisitorGraphHeader = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  & h3 {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    margin-bottom: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  & p {
    margin-bottom: 0;
    color: ${({ theme }) => rgba(theme.palette.primary.contrastText, 0.7)};
  }
`;

export const StyledActiveVisitorGraph = styled.div`
  margin-top: auto;
`;

export const StyledActiveVisitorContent = styled.div`
  padding: 20px 24px;
`;

export const StyledActiveVisitorContentHeader = styled.div`
  margin-bottom: 2px;

  & h3 {
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 18px;
    margin-bottom: 0;
  }

  & span {
    margin-left: 12px;
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 12px;
    }
  }

  & p {
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 4px;
  }
`;

export const StyledActiveVisitorFooter = styled.div`
  text-align: right;

  [dir='rtl'] & {
    text-align: left;
  }
`;

export const StyledActiveVisitorLink = styled(Link)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: ${({ theme }) => theme.font.size.lg};
  margin-top: 6px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-top: 16px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
