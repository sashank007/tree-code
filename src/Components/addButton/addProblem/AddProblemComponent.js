import React, { useRef } from "react";
import { getCodeData, saveCodeData } from "../../../MiddleWare/codeMiddleware";
import { updateProblems } from "../../../MiddleWare/treeMiddleware";

import "./AddProblemComponent.css";
export default function AddProblemComponent(props) {
  const titleRef = useRef();
  const explRef = useRef();
  const codeRef = useRef();

  const { currentSubTreeTitle, hideModal } = props;
  const submitProblem = () => {
    const title = titleRef.current.value;
    const code = codeRef.current.value;
    const explanation = explRef.current.value;

    saveCodeData(title, explanation, code);
    updateProblems(currentSubTreeTitle, title);

    //fetch the new problems
    getCodeData(currentSubTreeTitle);
    hideModal();
  };

  return (
    <div>
      <h2> Add problem</h2>
      <pre>Title : </pre>
      <input ref={titleRef} type="text"></input>
      <pre>Explanation : </pre>
      <textarea ref={explRef} type="text" id="explanation"></textarea>
      <pre>Code : </pre>
      <textarea ref={codeRef} type="text" id="code"></textarea>
      <br />
      <button onClick={submitProblem}>Add</button>
    </div>
  );
}
