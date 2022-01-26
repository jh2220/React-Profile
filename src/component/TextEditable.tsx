import React from "react";
import "../style/Inputs.scss";

interface ITextEditable {
  TextValue: string;
  onChange(eventResult: string): any;
  onBlur(eventResult: string): any;
  underlines?: boolean;
  fontSize?: string;
  placeHolder?: string;
}

const TextEditable: React.FC<ITextEditable> = (props) => {
  const { TextValue, onChange, onBlur, underlines, fontSize, placeHolder } = props;

  return (
    <>
      <input
        style={fontSize ? { fontSize: fontSize } : { fontSize: "24px" }}
        className="TextEditable"
        type="text"
        value={TextValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onBlur={(e) => {
          onBlur(e.target.value);
        }}
        placeholder={placeHolder ? placeHolder : ""}
      />
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
