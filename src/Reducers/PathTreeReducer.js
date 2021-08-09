import * as ACTION_TYPES from "../ActionTypes/ActionTypes";

export const PathTreeReducer = (
  state = {
    pathTree: ["Root"],
  },
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPES.SET_PATH_TREE: {
      return { ...state, pathTree: payload };
    }
    default: {
    }
  }
  return state;
};
