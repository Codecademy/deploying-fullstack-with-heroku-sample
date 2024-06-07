export const InFoViewActions = {
  FETCH_STARTS: 'FETCH_STARTS',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_INFOVIEW: 'CLEAR_INFO_VIEW',
};

export function contextReducer(state, action) {
  switch (action.type) {
    case InFoViewActions.FETCH_STARTS: {
      return {
        ...state,
        loading: true,
        displayMessage: '',
        error: '',
      };
    }
    case InFoViewActions.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        displayMessage: '',
        error: '',
      };
    }
    case InFoViewActions.SET_MESSAGE: {
      return {
        ...state,
        loading: false,
        displayMessage: action.payload,
        error: '',
      };
    }
    case InFoViewActions.SET_ERROR: {
      return {
        ...state,
        loading: false,
        displayMessage: '',
        error: action.payload,
      };
    }
    case InFoViewActions.CLEAR_INFOVIEW: {
      return {
        ...state,
        loading: false,
        displayMessage: '',
        error: '',
      };
    }
    default:
      return state;
  }
}
