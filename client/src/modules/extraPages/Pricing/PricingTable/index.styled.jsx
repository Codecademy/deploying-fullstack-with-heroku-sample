import styled from "styled-components";
import { Button, Table } from "antd";

export const StyledAmount = styled.span`
  font-size: 48px;
  font-weight: bold;
`;

export const StyledBtn = styled(Button)`
  width: 90%;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.text.primary};
  max-height: 46px;
  border-radius: 30px;
  border: 2px solid transparent;
  background: ${({ theme }) => theme.palette.background.paper};
`;

export const StyledTable = styled(Table)`
  .ant-table-tbody .ant-table-row:nth-child(even) {
    //background-color: whitesmoke;
  }
`;
