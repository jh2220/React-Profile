import React, { useEffect, useState } from "react";
import IStyles from "../interface/Styles";

const AppBox: React.FC<IStyles> = (props) => {
  const [Element, setElement] = useState(<></>);

  const { as, display, justifyContent, margin, className } = props;

  useEffect(() => {
    let renderStyle = {};

    if (display) renderStyle = { ...renderStyle, display: display };
    if (justifyContent) renderStyle = { ...renderStyle, justifyContent: justifyContent };
    if (margin) renderStyle = { ...renderStyle, margin: margin };

    if (as === "div")
      setElement(
        <div className={className || undefined} style={renderStyle}>
          {props.children}
        </div>
      );
    if (as === "section")
      setElement(
        <section className={className || undefined} style={renderStyle}>
          {props.children}
        </section>
      );
    if (as === undefined)
      setElement(
        <div className={className || undefined} style={renderStyle}>
          {props.children}
        </div>
      );
  }, [display, justifyContent, margin, as, className, props.children]);

  return <>{Element}</>;
};

export default AppBox;
