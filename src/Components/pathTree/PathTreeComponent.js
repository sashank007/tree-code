import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pathTreeSaver } from "../../Actions/PathTreeActions";
import { treeFetcher } from "../../Actions/TreeActions";
import StringUtils from "../../utils/StringUtils";

export default function PathTreeComponent() {
  let { pathTree } = useSelector((state) => ({
    ...state.ProgCategoriesReducer,
    ...state.SubTreeReducer,
    ...state.TreeReducer,
    ...state.PathTreeReducer,
  }));

  const dispatch = useDispatch();
  console.log("path tree : ", pathTree);

  const pathTreeClicked = (event) => {
    const goToNode = event.target.value;

    const tree = pathTree;
    console.log("value : ", event.target);
    if (StringUtils.isNotBlank(goToNode)) {
      while (pathTree[pathTree.length - 1] !== goToNode) {
        tree.pop();
      }

      pathTreeSaver(dispatch, tree);
      treeFetcher(dispatch, goToNode);
    }
  };
  const displayPathTree = () => {
    return (
      <ul>
        {pathTree.map((node) => (
          <li>
            <button onClick={pathTreeClicked} value={node}>
              {node}
            </button>
          </li>
        ))}
      </ul>
    );
  };
  return <div>{displayPathTree()}</div>;
}
