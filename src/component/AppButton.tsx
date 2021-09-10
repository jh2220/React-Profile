import React from "react";

interface IAppButton {
  onClick?: Function;
}

const AppButton: React.FC<IAppButton> = (props) => {
  const { onClick } = props;

  return (
    <button
      className="AppButton"
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {props.children}
    </button>
  );
};

export default AppButton;
