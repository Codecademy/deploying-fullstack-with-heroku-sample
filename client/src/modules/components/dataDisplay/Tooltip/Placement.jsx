import React from 'react';
import { Button, Tooltip } from 'antd';
import {
  StyledTooltipLeft,
  StyledTooltipPlacement,
  StyledTooltipRight,
} from './Placement.styled';

const text = <span>prompt text</span>;
const buttonWidth = 70;

const Placement = () => {
  return (
    <StyledTooltipPlacement>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Tooltip placement='topLeft' title={text}>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement='top' title={text}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement='topRight' title={text}>
          <Button>TR</Button>
        </Tooltip>
      </div>
      <StyledTooltipLeft style={{ width: buttonWidth, float: 'left' }}>
        <Tooltip placement='leftTop' title={text}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement='left' title={text}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement='leftBottom' title={text}>
          <Button>LB</Button>
        </Tooltip>
      </StyledTooltipLeft>
      <StyledTooltipRight
        style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}
      >
        <Tooltip placement='rightTop' title={text}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement='right' title={text}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement='rightBottom' title={text}>
          <Button>RB</Button>
        </Tooltip>
      </StyledTooltipRight>
      <div
        style={{
          marginLeft: buttonWidth,
          clear: 'both',
          whiteSpace: 'nowrap',
        }}
      >
        <Tooltip placement='bottomLeft' title={text}>
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement='bottom' title={text}>
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement='bottomRight' title={text}>
          <Button>BR</Button>
        </Tooltip>
      </div>
    </StyledTooltipPlacement>
  );
};

export default Placement;
