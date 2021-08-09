import React, { useRef } from "react";
import { getTreeData, saveTreeData } from "../../MiddleWare/treeMiddleware";

export default function AddSubTreeComponent(props) {
  const { currentSubTreeTitle, fetchSubTree } = props;
  const inputRef = useRef();

  const addSubTree = async () => {
    const newNodeTitle = inputRef.current.value;
    console.log("new node title :  ", newNodeTitle, currentSubTreeTitle);
    await saveTreeData(currentSubTreeTitle, newNodeTitle);
    fetchSubTree(currentSubTreeTitle);
  };

  return (
    <div>
      <button onClick={addSubTree}>Add</button>
      <input ref={inputRef} type="text" />
    </div>
  );
}
