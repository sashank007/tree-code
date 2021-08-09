import * as ACTION_TYPES from "../ActionTypes/ActionTypes";
import { getCodeData } from "../MiddleWare/codeMiddleware";
import Code from "../Models/Code";

export const codeFetcher = async (dispatch = null, payload = null) => {
  console.log("payload ; ", payload);

  const currentCode = await getCodeData(payload);
  console.log("current code : ", currentCode);

  if (currentCode && currentCode.length > 0) return new Code(currentCode[0]);
};
