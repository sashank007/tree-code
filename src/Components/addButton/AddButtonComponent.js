import React, { useRef, useState } from "react";
import Modal from "react-modal";
import AddProblemComponent from "./addProblem/AddProblemComponent";
import AddTreeNodeComponent from "./addTreeNode/AddTreeNodeComponent";

export default function AddButtonComponent(props) {
  const { currentSubTreeTitle, fetchSubTree } = props;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [displayAddTreeNodeComponent, setdisplayAddTreeNodeComponent] =
    useState(false);
  const [displayAddProblemComponent, setdisplayAddProblemComponent] =
    useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const displayModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const addProblem = () => {
    setdisplayAddTreeNodeComponent(false);
    setdisplayAddProblemComponent(true);
  };

  const addTreeNode = () => {
    setdisplayAddTreeNodeComponent(true);
    setdisplayAddProblemComponent(false);
  };

  return (
    <div>
      <div>
        <button onClick={displayModal}>Add</button>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={hideModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={hideModal}>close</button>
          <br />
          <button onClick={addProblem}>Add Problem</button>
          <button onClick={addTreeNode}>Add TreeNode</button>
          <div>
            {" "}
            {displayAddTreeNodeComponent && (
              <AddTreeNodeComponent
                currentSubTreeTitle={currentSubTreeTitle}
                fetchSubTree={fetchSubTree}
              />
            )}
          </div>
          <div>
            {" "}
            {displayAddProblemComponent && (
              <AddProblemComponent currentSubTreeTitle={currentSubTreeTitle} />
            )}{" "}
          </div>
        </Modal>
      </div>
    </div>
  );
}
