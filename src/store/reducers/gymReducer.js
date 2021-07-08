import * as actionType from "../actions/types";

const initialState = {
  gyms: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_GYMS:
      return {
        ...state,
        gyms: action.payload,
      };

    case actionType.CREATE_GYM:
      return {
        ...state,
        gyms: [...state.gyms, action.payload],
      };

    default:
      return state;
  }
};

export default authReducer;
