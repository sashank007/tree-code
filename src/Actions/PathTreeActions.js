import * as ACTION_TYPES from "../ActionTypes/ActionTypes";

export const pathTreeSaver = async (dispatch = null, payload = null) => {
  dispatch({ type: ACTION_TYPES.SET_PATH_TREE, payload: payload });
};
