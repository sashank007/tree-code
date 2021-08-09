import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { progCategoriesSaver } from "../Actions/ProgCategoriesActions";
import { treeSaver, treeFetcher } from "../Actions/TreeActions";
import HomePageComponent from "../Components/homePage/HomePageComponent";
import PathTreeComponent from "../Components/pathTree/PathTreeComponent";

import "./Main.css";
export default function Main() {
  const dispatch = useDispatch();

  /**
   * TODO  Database call, get the tree from the database and supply to all reducers.
   */
  const fetchMainTree = () => {
    //Call database interface, fetch tree
    //progCategoriesSaver -> save first layer of tree
    // mainTreeSaver -> save the tree to redux store

    treeFetcher(dispatch);
  };

  useEffect(() => {
    fetchMainTree();
  });

  return (
    <div>
      <div className="main">
        <div className="path-tree">
          <PathTreeComponent />
        </div>
        <div className="home-page">
          <HomePageComponent />
        </div>
      </div>
    </div>
  );
}
