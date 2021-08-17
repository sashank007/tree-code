import React, { useEffect, useState } from "react";
import { codeFetcher } from "../../Actions/CodeActions";
import { useDispatch } from "react-redux";
import CodeComponent from "./CodeComponent/CodeComponent";

export default function CodePageComponent(props) {
  const dispatch = useDispatch();

  const [codePieces, setCodePieces] = useState([]);
  const { problems } = props;

  console.log("problems has changed : ", problems);
  useEffect(() => {
    fetchCode();
    return () => {
      setCodePieces([]);
    };
  }, [problems]);

  /**
   * For each problem coming from MainTree.problems, we fetch the code and explanation
   * through /findCode.
   */
  const fetchCode = async () => {
    console.log("fetch code called");
    const promises = [];

    if (problems && problems.length > 0) {
      problems.forEach((problem) => {
        promises.push(codeFetcher(dispatch, problem));
      });

      // codePieces = await Promise.all(promises);
      let codePieces = await Promise.all(promises);

      setCodePieces(codePieces);
    }
  };

  const displayCode = () => {
    return (
      <ul>
        {codePieces.map((code) => (
          <li>{<CodeComponent {...code} />}</li>
        ))}
      </ul>
    );
  };

  return <div>{displayCode()}</div>;
}
