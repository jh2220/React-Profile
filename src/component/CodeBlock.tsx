import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "../style/CodeBlock.scss";

interface ICodeBlock {
  textContent: string;
  id?: string;
}

const CodeBlock: React.FC<ICodeBlock> = (props) => {
  const [linesRow, setLinesRow] = useState<JSX.Element[]>();

  const { textContent, id } = props;

  useEffect(() => {
    const lines = textContent.split("\n").length;

    const row = [];

    for (let i = 0; i < lines; i++) {
      row.push(<li>{i + 1}</li>);
    }

    setLinesRow(row);
  }, [textContent]);

  return (
    <div className="codeblock-body">
      <ul>{linesRow}</ul>

      <textarea id={id ? id : undefined} value={textContent}></textarea>
    </div>
  );
};

export default CodeBlock;
