import * as actionType from "../actions/types";

const initialState = {
  user: null,
  users: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionType.SET_OWNER:
      return state;

    case actionType.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
