import React, { useRef } from "react";
import { saveTreeData } from "../../../MiddleWare/treeMiddleware";

export default function AddTreeNodeComponent(props) {
  const inputRef = useRef();
  const { currentSubTreeTitle, fetchSubTree, hideModal } = props;

  const addNode = async () => {
    const newNodeTitle = inputRef.current.value;

    await saveTreeData(currentSubTreeTitle, newNodeTitle);
    fetchSubTree(currentSubTreeTitle);
    hideModal();
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
