import * as ACTION_TYPES from "../ActionTypes/ActionTypes";
import { getCodeData } from "../MiddleWare/codeMiddleware";
import Code from "../Models/Code";

export const codeFetcher = async (dispatch = null, payload = null) => {
  const currentCode = await getCodeData(payload);

  if (currentCode && currentCode.length > 0) return new Code(currentCode[0]);
};
