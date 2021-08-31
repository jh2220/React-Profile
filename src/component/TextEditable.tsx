import React, { Dispatch, SetStateAction } from "react";
import ICardList from "../interface/ListContent";
import "../style/Inputs.scss";

interface ITextEditable {
  TextValue: string;
  onChange(eventResult: string): any;
  underlines?: boolean;
}

const TextEditable: React.FC<ITextEditable> = (props) => {
  const { TextValue, onChange, underlines } = props;

  return (
    <>
      <input
        className="TextEditable"
        type="text"
        value={TextValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
      {underlines === false ? (
        <></>
      ) : (
        <span className="TextEditable-underbar">
          <span className="TextEditable-underbar-expande" />
        </span>
      )}
    </>
  );
};

export default TextEditable;
