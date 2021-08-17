import * as ACTION_TYPES from "../ActionTypes/ActionTypes";
import { getTreeData } from "../MiddleWare/treeMiddleware";
import TreeNode from "../Models/TreeNode";

// This function gets the main tree from the database on load and saves it to redux store
// @TODO : Also add logic to get tree on load and save
export const treeSaver = (dispatch = null, payload = null) => {
  dispatch({ type: ACTION_TYPES.SAVE_TREE, payload: payload });
};

//retrieves the main tree from the backend server.
export const treeFetcher = async (dispatch = null, payload = undefined) => {
  const currentTree = await getTreeData(payload);

  //save to the redux store
  if (currentTree && currentTree.length > 0) {
    const treeNode = new TreeNode(currentTree[0]);
    treeSaver(dispatch, { treeNode });
  }
};
