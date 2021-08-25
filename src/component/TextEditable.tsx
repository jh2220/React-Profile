import React from "react";
import "../style/Inputs.scss";

interface ITextEditable {
  TextValue: string;
}

const TextEditable: React.FC<ITextEditable> = (props) => {
  const { TextValue } = props;

  return (
    <>
      <input className="TextEditable" type="text" value={TextValue}></input>
      <span className="TextEditable-underbar">
        <span className="TextEditable-underbar-expande"></span>
      </span>
    </>
  );
};

export default TextEditable;
