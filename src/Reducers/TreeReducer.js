import * as ACTION_TYPES from "../ActionTypes/ActionTypes";
import TreeNode from "../Models/TreeNode";

const initialState = {
  treeNode: new TreeNode(),
};

export const TreeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SAVE_TREE:
      console.log("tree reducer : ", payload);
      return { ...state, ...payload };

    default:
      return state;
  }
};
