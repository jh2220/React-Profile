import React from "react";
import "../style/Modal.scss";

// interface IModal {
//   content: ChildNode;
// }
//: React.FC<IModal>
const AppModal: React.FC = (props) => {
  // const { content } = props;

  return (
    <div className="Modal-Black-Screen">
      <div className="Modal-Children">{props.children}</div>
    </div>
  );
};

export default AppModal;
