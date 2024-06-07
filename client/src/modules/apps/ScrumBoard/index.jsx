import BoardDetail from "./BoardDetail";
import BoardList from "./BoardList";
import { useParams } from "react-router-dom";
import ScrumContextProvider from "../context/ScrumContextProvider";

const ScrumBoard = () => {
  const params = useParams();

  const onGetMainComponent = () => {
    if (params.id) {
      return <BoardDetail />;
    } else {
      return <BoardList />;
    }
  };

  return <ScrumContextProvider>{onGetMainComponent()}</ScrumContextProvider>;
};

export default ScrumBoard;
