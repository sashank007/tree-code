import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { treeFetcher } from "../Actions/TreeActions";
import HomePageComponent from "../Components/homePage/HomePageComponent";
import PathTreeComponent from "../Components/pathTree/PathTreeComponent";

import "./Main.css";
export default function Main() {
  const dispatch = useDispatch();

  /**
   * Fetch the main tree from the database with Root node.
   */
  const fetchMainTree = () => {
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
