import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { setConstantValue } from "typescript";
import "../style/Modal.scss";

interface IAppModal {
  setCloseModal: Dispatch<SetStateAction<boolean>>;
  modalIsOpen: boolean;
}

const AppModal: React.FC<IAppModal> = (props) => {
  const { setCloseModal, modalIsOpen } = props;

  const [Opacity, setOpacity] = useState(1);

  const modalDesapear = () => {
    setOpacity(0);

    setTimeout(() => {
      setCloseModal(false);
    }, 1000);
  };

  useEffect(() => {
    if (modalIsOpen === true) {
      setOpacity(1);
    }
  }, [modalIsOpen]);

  return (
    <div
      className="Modal-Black-Screen"
      style={modalIsOpen ? { opacity: Opacity, display: "flex" } : { opacity: Opacity, display: "none" }}
    >
      <div className="Modal-Children">
        <div className="Modal-Close-line">
          <FaTimes
            className="icon"
            onClick={() => {
              modalDesapear();
            }}
          />
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default AppModal;
