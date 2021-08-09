import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pathTreeSaver } from "../../Actions/PathTreeActions";
import { treeFetcher } from "../../Actions/TreeActions";
import StringUtils from "../../utils/StringUtils";
import AddSubTreeComponent from "../addSubTree/AddSubTreeComponent";
import CodePageComponent from "../codePage/CodePageComponent";
import PathTreeComponent from "../pathTree/PathTreeComponent";
import SubTreeComponent from "../subtree/SubTreeComponent";
import "./HomePageComponent.css";

export default function HomePageComponent() {
  let { treeNode, pathTree } = useSelector((state) => ({
    ...state.ProgCategoriesReducer,
    ...state.SubTreeReducer,
    ...state.TreeReducer,
    ...state.PathTreeReducer,
  }));

  const dispatch = useDispatch();

  console.log("current tree in home page : ", treeNode);

  const [displayProgCategories, setdisplayProgCategories] = useState(true);
  const [displaySubTree, setdisplaySubTree] = useState(false);
  const [parentNode, setParentNode] = useState("Root");

  //Function to retrieve the main categories from the redux store
  const fetchSubTree = (treeNodeTitle) => {
    console.log("fetching subTree...", treeNodeTitle);

    treeFetcher(dispatch, treeNodeTitle);
  };

  const updatePathTree = (newNode) => {
    pathTree.push(newNode);
    pathTreeSaver(dispatch, pathTree);
  };

  const clickTreeNode = (event) => {
    const newSubTreeTitle = event.target.value;
    displaySubTreeComponent(newSubTreeTitle);
    updatePathTree(newSubTreeTitle);
  };

  //Function to display the subtree , by opening up sub categorie
  const displaySubTreeComponent = (newSubTreeTitle) => {
    setParentNode(newSubTreeTitle);
    fetchSubTree(newSubTreeTitle);
    // setdisplayProgCategories(false);
    // setdisplaySubTree(true);
  };

  // Function to show the categories
  const displayProgrammingCategories = () => {
    let progCategories = <div />;

    if (treeNode !== undefined && treeNode.hasOwnProperty("children")) {
      const categories = treeNode.children;

      progCategories = displayProgCategories && (
        <ul>
          {categories.map(
            (category) =>
              StringUtils.isNotBlank(category) && (
                <li key={category}>
                  <button onClick={clickTreeNode} value={category}>
                    {category}
                  </button>
                </li>
              )
          )}
        </ul>
      );
    }

    return progCategories;
  };

  return (
    <div>
      <h1>Tree Code</h1>

      <div className="programming-categories-list">
        {displayProgrammingCategories()}
      </div>
      {displaySubTree && (
        <div className="sub-tree">
          <SubTreeComponent />
        </div>
      )}
      <div>
        <AddSubTreeComponent
          currentSubTreeTitle={parentNode}
          fetchSubTree={fetchSubTree}
        />
      </div>
      <CodePageComponent problems={treeNode.problems} />
    </div>
  );
}
