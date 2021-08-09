import * as ACTION_TYPES from "../ActionTypes/ActionTypes";

const initialState = {
  subTree: [],
};

export const SubTreeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.GET_SUBTREE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
