import { Col } from 'antd';
import styled from 'styled-components';

export const StyledCol1 = styled(Col)`
  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    top: 70px;
    align-self: flex-start;
    position: sticky;
    order: 2;

    .bit-bucket-sidebar + .mainContent & {
      top: 0;
    }
  }
`;
export const StyledCol2 = styled(Col)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    order: 1;
  }
`;

export const StyledFlexTag = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -3px;
  margin-right: -3px;
`;

export const StyledTagWrapper = styled.div`
  padding-left: 3px;
  padding-right: 3px;
  margin-bottom: 6px;
`;

export const StyledTag = styled.span`
  display: block;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.palette.dividerColor};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.text.secondary};
  padding: 5px 16px 7px;
`;
