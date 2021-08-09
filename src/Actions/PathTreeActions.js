import * as ACTION_TYPES from "../ActionTypes/ActionTypes";
import { getCodeData } from "../MiddleWare/codeMiddleware";
import Code from "../Models/Code";

export const pathTreeSaver = async (dispatch = null, payload = null) => {
  console.log("payload for path saver ; ", payload);
  dispatch({ type: ACTION_TYPES.SET_PATH_TREE, payload: payload });
};
