import React, { useRef, useState } from "react";
import { saveTreeData } from "../../../MiddleWare/treeMiddleware";

export default function AddTreeNodeComponent(props) {
  const inputRef = useRef();
  const { currentSubTreeTitle, fetchSubTree } = props;

  console.log("props for add tree  : ", props);

  const addNode = async () => {
    const newNodeTitle = inputRef.current.value;
    console.log("new node title :  ", newNodeTitle, currentSubTreeTitle);
    await saveTreeData(currentSubTreeTitle, newNodeTitle);
    fetchSubTree(currentSubTreeTitle);
  };

  return (
    <div>
      <h2>Add a new Node</h2>
      <input ref={inputRef} type="text"></input>
      <br />
      <button onClick={addNode}>Add</button>
    </div>
  );
}
