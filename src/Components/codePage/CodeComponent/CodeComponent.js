import React from "react";
import "./CodeComponent.css";

export default function CodeComponent(props) {
  const { code, explanation } = props;
  console.log("props : ", props);
  return (
    <div className="code-component">
      <div>
        <p>{explanation}</p>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
