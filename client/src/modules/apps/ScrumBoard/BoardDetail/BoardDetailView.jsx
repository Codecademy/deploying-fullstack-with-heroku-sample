import { useEffect, useState } from "react";
import AddCard from "./List/AddCard";
import AppsContent from "@crema/components/AppsContainer/AppsContent";
// import "./react-trello.d";
import Board from "react-trello";
import PropTypes from "prop-types";
import { postDataApi, putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";
import ListHeader from "./List/ListHeader";
import AddCardButton from "./List/AddCardButton";
import BoardCard from "./List/BoardCard";
import AddNewList from "./AddNewList";
import NewListButton from "./NewListButton";

const BoardDetailView = (props) => {
  const [list, setList] = useState(null);
  const infoViewActionsContext = useInfoViewActionsContext();
  const { theme } = useThemeContext();
  const [isAddCardOpen, setAddCardOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const { boardDetail, setData } = props;

  const getBoardData = () => {
    return {
      ...boardDetail,
      lanes: boardDetail.list,
    };
  };

  const [boardData, setBoardData] = useState(getBoardData());

  useEffect(() => {
    setBoardData(getBoardData());
  }, [boardDetail]);

  const shouldReceiveNewData = (nextData) => {
    setBoardData(nextData);
  };

  const onCloseAddCard = () => {
    setAddCardOpen(false);
  };

  const onClickAddCard = (listId) => {
    setList(boardData.lanes.find((item) => item.id === listId));
    setSelectedCard(null);
    setAddCardOpen(true);
  };

  const onAddList = (name) => {
    postDataApi("/api/scrumboard/add/list", infoViewActionsContext, {
      boardId: boardDetail?.id,
      list: {
        name: name,
      },
    })
      .then((data) => {
        setData(data);
        infoViewActionsContext.showMessage("List Added Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const getCardById = (lane, cardId) =>
    lane.cards.find((item) => item.id === cardId);

  const onEditCardDetail = (cardId) => {
    const selectedList = boardData.lanes.find((item) => {
      const correctCard = item.cards.find((card) => card.id === cardId);
      if (correctCard) return item;
    });
    const selectedCard = getCardById(selectedList, cardId);
    setSelectedCard(selectedCard);
    setList(selectedList);
    setAddCardOpen(true);
  };

  const handleDragCard = (
    cardId,
    sourceLaneId,
    targetLaneId,
    position,
    cardDetails,
  ) => {
    if (sourceLaneId !== targetLaneId) {
      const boardId = boardDetail?.id;
      putDataApi("/api/cards/update/category", infoViewActionsContext, {
        cardId: cardDetails.id,
        sourceLaneId: sourceLaneId,
        categoryId: targetLaneId,
        position: position,
        boardId: boardId,
      })
        .then((data) => {
          setData(data);
          infoViewActionsContext.showMessage("Card Updated Successfully!");
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const onEditBoardList = (lane, data) => {
    putDataApi("/api/scrumboard/edit/list", infoViewActionsContext, {
      boardId: boardDetail?.id,
      list: { ...lane, name: data.title },
    })
      .then((data) => {
        setData(data);
        infoViewActionsContext.showMessage("List Edited Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onDeleteSelectedList = (laneId) => {
    postDataApi("/api/scrumboard/delete/list", infoViewActionsContext, {
      boardId: boardDetail?.id,
      listId: laneId,
    })
      .then((data) => {
        setData(data);
        infoViewActionsContext.showMessage("List Deleted Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <AppsContent fullView>
      <Board
        laneStyle={{
          backgroundColor: theme.palette.background.default,
        }}
        editable
        canAddLanes
        data={boardData}
        onDataChange={shouldReceiveNewData}
        handleDragEnd={handleDragCard}
        onCardAdd={(card, laneId) => {
          onClickAddCard(laneId);
        }}
        onCardClick={(cardId, metadata, laneId) => {
          onEditCardDetail(cardId, laneId);
        }}
        onLaneAdd={(name) => onAddList(name)}
        onLaneUpdate={(laneId, data) => {
          const lane = boardData.lanes.find((item) => item.id === laneId);
          onEditBoardList(lane, data);
        }}
        onLaneDelete={(laneId) => onDeleteSelectedList(laneId)}
        t={(listId) => onClickAddCard(listId)}
        components={{
          Card: BoardCard,
          LaneHeader: ListHeader,
          AddCardLink: AddCardButton,
          NewCardForm: AddCard,
          NewLaneForm: AddNewList,
          NewLaneSection: NewListButton,
        }}
      />
      {isAddCardOpen ? (
        <AddCard
          isModalVisible={isAddCardOpen}
          handleCancel={onCloseAddCard}
          list={list}
          board={boardDetail}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          setData={setData}
        />
      ) : null}
    </AppsContent>
  );
};

export default BoardDetailView;

BoardDetailView.propTypes = {
  boardDetail: PropTypes.object,
  setData: PropTypes.func,
};
