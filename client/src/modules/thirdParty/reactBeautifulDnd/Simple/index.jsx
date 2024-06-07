import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import {
  StyledBeautifulDndAvatar,
  StyledBeautifulDndContent,
  StyledSimpleDnd,
  StyledSimpleDndListItem,
} from '../index.styled';
import { dndData } from '@crema/mockapi/fakedb/extraPages';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const grid = 8;

const getListStyle = (isDraggingOver, overflow) => ({
  // background: isDraggingOver ? 'lightblue' : 'grey',
  border: '5px solid pink',
  padding: grid,
  maxHeight: '50vh',
  overflow,
  width: 300,
  '@media (minWidth: 600px)': {
    width: 300,
  },
});

class Simple extends Component {
  static propTypes = {
    overflow: PropTypes.string,
  };
  static defaultProps = {
    overflow: 'auto',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      items: dndData,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index,
    );

    this.setState({
      items,
    });
  }

  // Normally you would want to split things out into separate core.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId='droppable'>
          {(droppableProvided, droppableSnapshot) => (
            <StyledSimpleDnd>
              <div
                ref={droppableProvided.innerRef}
                style={getListStyle(
                  droppableSnapshot.isDraggingOver,
                  this.props.overflow,
                )}
                onScroll={() => {
                  // eslint-disable-next-line no-console
                }}
              >
                {this.state.items.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.handle}
                    index={index}
                  >
                    {(draggableProvided) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <StyledSimpleDndListItem>
                          <StyledBeautifulDndAvatar
                            alt='Remy Sharp'
                            src={item.image}
                          />
                          <StyledBeautifulDndContent>
                            <h3>{item.name}</h3>
                            <p className='text-truncate'>@{item.handle}</p>
                          </StyledBeautifulDndContent>
                        </StyledSimpleDndListItem>
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            </StyledSimpleDnd>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Simple;

Simple.propTypes = {
  classes: PropTypes.object,
};
