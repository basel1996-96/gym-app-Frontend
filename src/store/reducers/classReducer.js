import * as actionType from "../actions/types";

const initialState = {
  classes: [],
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_CLASS:
      return {
        ...state,
        classes: action.payload,
      };

    case actionType.CREATE_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };

    default:
      return state;
  }
};

export default classReducer;
