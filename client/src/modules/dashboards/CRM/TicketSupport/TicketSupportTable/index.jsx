import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import {
  StyledTicketSupportTable,
  StyledTicketSupportUserInfo,
  StyledTicketSupportUserInfoContent,
} from "../index.styled";

const columns = [
  {
    title: "No.",
    dataIndex: `id`,
    key: "id",
    render: (id) => <span>{id}.</span>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name, record) => (
      <StyledTicketSupportUserInfo>
        <Avatar src={record.image} />
        <StyledTicketSupportUserInfoContent>
          <h3>{record.name}</h3>
        </StyledTicketSupportUserInfoContent>
      </StyledTicketSupportUserInfo>
    ),
  },
  {
    title: "Ticket ID",
    dataIndex: "ticketId",
    key: "ticketId",
  },
  {
    title: "Create Date",
    dataIndex: "created",
    key: "created",
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
  },
];

// const getData = (data) => {
//   if (isBreakPointDown('xl')) {
//     return data.slice(0, 9);
//   } else {
//     return data.slice(0, 7);
//   }
// };

const TicketSupportTable = (props) => {
  const ticketSupportData = props.ticketSupportData;

  return (
    <StyledTicketSupportTable
      scroll={{ x: "auto", y: 340 }}
      hoverColor
      data={ticketSupportData}
      columns={columns}
    />
  );
};

export default TicketSupportTable;

TicketSupportTable.defaultProps = {
  ticketSupportData: [],
};

TicketSupportTable.propTypes = {
  ticketSupportData: PropTypes.array,
};
