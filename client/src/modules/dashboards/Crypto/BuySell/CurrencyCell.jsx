import PropTypes from "prop-types";
import { Avatar, Select } from "antd";
import { StyledFlex, StyledSecondaryText } from "./index.styled";

const CurrencyCell = (coin) => {
  return (
    <Select.Option key={coin.id} value={coin.id}>
      <StyledFlex>
        {coin.icon ? (
          <Avatar
            size={24}
            style={{
              marginRight: 10,
              minWidth: 24,
            }}
            src={coin.icon}
          />
        ) : (
          <Avatar
            size={24}
            style={{
              marginRight: 10,
              minWidth: 24,
            }}
          >
            {coin.name.toUpperCase()}
          </Avatar>
        )}
        <span>{coin.name}</span>
        <StyledSecondaryText>{coin.shortName}</StyledSecondaryText>
      </StyledFlex>
    </Select.Option>
  );
};

export default CurrencyCell;

CurrencyCell.propTypes = {
  coin: PropTypes.object,
};
