import React, { useEffect, useState } from "react";
import { codeFetcher } from "../../Actions/CodeActions";
import { useDispatch } from "react-redux";
import CodeComponent from "./CodeComponent/CodeComponent";

export default function CodePageComponent(props) {
  const dispatch = useDispatch();

  const [codePieces, setCodePieces] = useState([]);

  const { problems } = props;

  useEffect(() => {
    fetchCode();
  }, [problems]);

  /**
   * For each problem coming from MainTree.problems, we fetch the code and explanation
   * through /findCode.
   */
  const fetchCode = async () => {
    let codePieces = [];

    const promises = [];
    console.log("props for code page : ", props);
    if (problems && problems.length > 0) {
      problems.forEach((problem) => {
        promises.push(codeFetcher(dispatch, problem));
      });

      console.log("promise s: ", promises);
      // codePieces = await Promise.all(promises);
      let codePieces = await Promise.all(promises);
      console.log("code pieces : ", codePieces);
      setCodePieces(codePieces);
    }
  };

  const displayCode = () => {
    // const codePieces = [
    //   {
    //     code: "function (a,b): return a +b",
    //     explanation: "Wow so nice coding!",
    //   },
    //   { code: "lambda x : x + y", explanation: "How to use lambda" },
    // ];

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
