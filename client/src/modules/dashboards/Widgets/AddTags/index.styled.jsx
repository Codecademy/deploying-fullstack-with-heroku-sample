import { Button } from 'antd';
import { darken, rgba } from 'polished';
import styled from 'styled-components';

export const StyledAddNewTagRow = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
`;

export const StyledTagCheck = styled.span`
  margin-left: 12px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 12px;
  }
`;

export const StyledTagClose = styled.span`
  margin-left: 12px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 12px;
  }
`;

export const StyledAddNewTagLink = styled.span`
  cursor: pointer;
  margin: 8px 8px 8px 12px;
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  [dir='rtl'] & {
    margin: 8px 12px 8px 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    font-size: 18px;
  }
`;

export const StyledAddTagsContent = styled.div`
  background-color: ${({ theme }) =>
    darken(0.068, theme.palette.background.paper)};
  border-radius: ${({ theme }) => theme.cardRadius};
  padding: 8px;
`;

export const StyledAddTagsRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledTagBadge = styled.span`
  font-size: ${({ theme }) => theme.font.size.base};
  margin: 8px;
  padding: 5px 12px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border-radius: 30px;
`;

export const StyledTagBadgeButton = styled(Button)`
  background-color: ${() => rgba('black', 0.26)};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border: 0 none;
  padding: 2px 0 0;
  box-shadow: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  width: 22px;
  height: 22px;
  font-size: ${({ theme }) => theme.font.size.sm};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 12px;
  }

  &:focus,
  &:hover {
    background-color: ${() => rgba('black', 0.26)};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
