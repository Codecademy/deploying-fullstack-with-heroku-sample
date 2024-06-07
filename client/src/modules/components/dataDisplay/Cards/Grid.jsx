import React from 'react';
import { Card } from 'antd';
import { StyledGridCard } from './grid.styled';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const Grid = () => {
  return (
    <StyledGridCard title='Card Title'>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        Content
      </Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    </StyledGridCard>
  );
};

export default Grid;
