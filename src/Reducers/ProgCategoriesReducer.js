import * as ACTION_TYPES from "../ActionTypes/ActionTypes";

export const ProgCategoriesReducer = (
  state = {
    categories: [],
  },
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPES.GET_CATEGORIES: {
      return { ...state, categories: payload };
    }
    default: {
    }
  }
  return state;
};
