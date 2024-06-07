import React from "react";
import PropTypes from "prop-types";
import { Avatar, Table } from "antd";
import {
  CloseCircleOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  StyledCartIncDec,
  StyledCartTable,
  StyledCartUser,
  StyledCartUserInfo,
} from "../index.styled";
import { postDataApi, putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";

const CartTable = ({ cartItems, loading, setTableData }) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const { Column, ColumnGroup } = Table;

  const onRemoveItem = (product) => {
    postDataApi("/api/cart/remove", infoViewActionsContext, {
      product,
    })
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onDecrement = (product) => {
    if (product.count > 1) {
      putDataApi("/api/cart/update", infoViewActionsContext, {
        product: { ...product, count: product.count - 1 },
      })
        .then((data) => {
          setTableData(data);
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    } else {
      postDataApi("/api/cart/remove", infoViewActionsContext, {
        product,
      })
        .then((data) => {
          setTableData(data);
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };
  const onIncrement = (product) => {
    putDataApi("/api/cart/update", infoViewActionsContext, {
      product: { ...product, count: product.count + 1 },
    })
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  console.log("cartItems", cartItems);
  return (
    <StyledCartTable
      loading={loading}
      dataSource={cartItems}
      pagination={false}
    >
      <ColumnGroup>
        <Column
          title="Product"
          dataIndex="product"
          key="product"
          render={(product) => {
            console.log("product:", product);
            return (
              <StyledCartUser>
                <Avatar src={product.image} />
                <StyledCartUserInfo>
                  <h3>{product.title}</h3>
                  <p>Brand: {product.brand}</p>
                </StyledCartUserInfo>
              </StyledCartUser>
            );
          }}
        />
        <Column
          title="Unit Price"
          dataIndex="price"
          key="price"
          render={(price) => <>${+price.mrp - +price.discount}</>}
        />
        <Column
          title="QTY"
          dataIndex="count"
          key="count"
          render={(count, record) => (
            <StyledCartIncDec>
              <PlusOutlined
                className="pointer"
                onClick={() => onIncrement(record)}
              />
              <span>{count}</span>
              <MinusOutlined
                className="pointer"
                onClick={() => onDecrement(record)}
              />
            </StyledCartIncDec>
          )}
        />
        <Column
          title="Total"
          dataIndex="total"
          key="total"
          render={(total, record) => {
            console.log("total:", total);
            console.log("record:", record);
            return (
              <span>${(+total.mrp - +total.discount) * +record.count}</span>
            );
          }}
        />
        <Column
          title=""
          dataIndex="close"
          key="close"
          render={(_, record) => (
            <span onClick={() => onRemoveItem(record)}>
              <CloseCircleOutlined
                style={{ fontSize: 18, cursor: "pointer" }}
              />
            </span>
          )}
        />
      </ColumnGroup>
    </StyledCartTable>
  );
};

export default CartTable;

CartTable.propTypes = {
  cartItems: PropTypes.array,
  setTableData: PropTypes.func,
  loading: PropTypes.bool,
};
