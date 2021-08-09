import * as ACTION_TYPES from "../ActionTypes/ActionTypes";

// Call this function on load and get the categories saved here
export const progCategoriesSaver = (dispatch = null, payload = null) => {
    dispatch({ type: ACTION_TYPES.SAVE_CATEGORIES, payload: payload });
  };
  