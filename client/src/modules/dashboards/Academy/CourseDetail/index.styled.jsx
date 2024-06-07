import styled from 'styled-components';

export const StyledCourseDetailHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCourseDetailThumb = styled.img`
  height: 60px;
  width: 60px;
  overflow: hidden;
  margin-right: 14px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }
`;

export const StyledCourseDetailHeaderInfo = styled.div`
  width: calc(100% - 76px);

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.base};
    margin-bottom: 2px;
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`;

export const StyledCourseDetailContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h4 {
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 12px;
  }

  & p {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
