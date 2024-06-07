import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import {
  StyledBeautifulDnd,
  StyledBeautifulDndAvatar,
  StyledBeautifulDndContent,
  StyledBeautifulDndListItem,
} from '../index.styled';
import { dndData } from '@crema/mockapi/fakedb/extraPages';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class Horizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: dndData.slice(0, 6),
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
        <Droppable droppableId='droppable' direction='horizontal'>
          {(provided) => (
            <div
              ref={provided.innerRef}
              style={{
                border: '5px solid #E0E0E0',
                display: 'flex',
                padding: 8,
                overflow: 'auto',
              }}
              {...provided.droppableProps}
            >
              {this.state.items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.handle}
                  index={index}
                >
                  {(provided) => (
                    <StyledBeautifulDnd
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <StyledBeautifulDndListItem>
                        <StyledBeautifulDndAvatar
                          alt='Remy Sharp'
                          src={item.image}
                        />
                        <StyledBeautifulDndContent>
                          <h3>{item.name}</h3>
                          <p className='mb-0'>@{item.handle}</p>
                        </StyledBeautifulDndContent>
                      </StyledBeautifulDndListItem>
                    </StyledBeautifulDnd>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Horizontal;

Horizontal.propTypes = {
  classes: PropTypes.object,
};
